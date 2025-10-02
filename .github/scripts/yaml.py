"""Minimal YAML parser for repository front matter."""
from __future__ import annotations

from typing import Any, List, Tuple


def safe_load(text: str) -> Any:
    lines = text.splitlines()
    processed: List[Tuple[int, str]] = []
    for raw in lines:
        if not raw.strip():
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        processed.append((indent, raw.strip()))

    stack: List[Tuple[Any, int]] = [({}, -1)]
    i = 0
    while i < len(processed):
        indent, content = processed[i]
        while len(stack) > 1 and indent <= stack[-1][1]:
            stack.pop()
        container, _ = stack[-1]
        if content.startswith("- "):
            if not isinstance(container, list):
                raise ValueError("List item without list container")
            container.append(_parse_scalar(content[2:].strip()))
            i += 1
            continue

        if ":" not in content:
            raise ValueError(f"Unsupported YAML content: {content}")
        key, rest = content.split(":", 1)
        key = key.strip()
        rest = rest.strip()
        if rest:
            container[key] = _parse_scalar(rest)
            i += 1
            continue

        # Determine whether the nested structure is a list or dict.
        next_container: Any = {}
        if i + 1 < len(processed):
            next_indent, next_content = processed[i + 1]
            if next_indent > indent and next_content.startswith("- "):
                next_container = []
            elif next_indent > indent:
                next_container = {}
            else:
                next_container = {}
        else:
            next_container = {}
        container[key] = next_container
        stack.append((next_container, indent))
        i += 1
    return stack[0][0]


def _parse_scalar(value: str) -> Any:
    if value == "[]":
        return []
    if value == "{}":
        return {}
    if value.lower() in {"null", "none"}:
        return None
    if value.lower() == "true":
        return True
    if value.lower() == "false":
        return False
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        parts = [part.strip() for part in inner.split(",")]
        return [_parse_scalar(part) for part in parts]
    if value.startswith("'") and value.endswith("'"):
        return value[1:-1]
    if value.startswith('"') and value.endswith('"'):
        return value[1:-1]
    if value.isdigit():
        try:
            return int(value)
        except ValueError:
            pass
    try:
        return float(value)
    except ValueError:
        pass
    return value
