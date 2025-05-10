// MCP servers must not use console.log (stdout) for logging, as it breaks protocol communication.
// Use console.error (stderr) instead. See: https://modelcontextprotocol.io/llms-full.txt#logging
function log(...args: any[]) {
  console.error(...args)
}

function debug(...args: any[]) {
  if (process.env.DEBUG === 'true') {
    console.log(...args)
  }
}

function error(...args: any[]) {
  console.error(...args)
}

function info(...args: any[]) {
  console.log(...args)
}

export const logger = {
  debug,
  log,
  error,
  info,
}
