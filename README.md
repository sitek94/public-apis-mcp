# Public APIs MCP

A simple MCP server for listing and searching public APIs from [public-apis](https://github.com/public-apis/public-apis).

## Installation

Add the following to your `mcp.json`:

```json
{
  "public-apis-mcp": {
    "name": "Public APIs",
    "description": "Get list of public APIs from github.com/public-apis",
    "command": "npx",
    "args": ["-y", "public-apis-mcp@latest"]
  }
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Start MCP server
pnpm start

# or Development using MCP Inspector
pnpm inspector
```

