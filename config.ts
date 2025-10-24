// Switched from `import.meta.env` to `process.env` to access environment variables,
// which is the supported method in this execution environment, resolving the runtime error.
// A fallback value is provided to prevent the app from crashing if the variable is not set.
const CLIENT_ID = process.env.VITE_DISCORD_CLIENT_ID || '1431187467981033592';

// Minimal, safe permissions: View Channels + Send Messages + Add Reactions + Read Message History + Use External Emojis
// Integer = 330816
export const INVITE_LINK =
  `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&permissions=330816&integration_type=0&scope=bot%20applications.commands`;

// Optional: demo/community link placeholder
export const DEMO_LINK = 'https://example.com/demo';
