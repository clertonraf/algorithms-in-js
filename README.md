## Algorithm to find unions

### Weighted quick union

| algorithm | initialize | union | connected | worst-case time |
|---|---|---|---|---|
| quick-find | N | N | 1 | M N |
| quick-union | N | N | N | M N |
| weighted-quick-union  | N | lg N | lg N | N + M log N |
| path-compressed-weighted-quick-union  | N | lg N | lg N | N + M log* N |