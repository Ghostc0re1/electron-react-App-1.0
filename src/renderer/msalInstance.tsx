import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: 'f61d1422-3444-4400-b12e-9735ea437f5c',
    authority: 'https://login.microsoftonline.com/c6d685ee-a0cf-40c4-a046-2c64cbeded7b',
    redirectUri: "myapp://auth",
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);
