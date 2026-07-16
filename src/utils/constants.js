export const APP_NAME = "Synapse Observatory";
const IS_PROD = process.env.NODE_ENV === 'production' || window.location.hostname !== 'localhost';

export const API_BASE_URL = IS_PROD 
  ? 'https://api.synapse.io' 
  : 'http://localhost:3000';

export const OBSERVATORY_URL = IS_PROD
  ? '' // No standalone client deployed, use empty string to trigger fallback
  : 'http://localhost:5175';

export const ENGINE_URL = IS_PROD
  ? '/n8n' // Will be proxied by vercel.json
  : 'http://localhost:8000';

export const SOCKET_URL = IS_PROD
  ? '' // Empty string so fetches hit Vercel relative /api/ai paths
  : 'http://localhost:4000';
