export const APP_NAME = "Synapse Observatory";
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.synapse.io' 
  : 'http://localhost:3000';
