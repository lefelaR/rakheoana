import type { AuthProviderProps } from "react-oidc-context";

export const cognitoUserPoolId = "eu-central-1_JHpeoLJ8G";
export const cognitoClientId = "7idikf4vh31do1bvjhd6s7fqd4";

const redirectUri =
  process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI || "http://localhost:3001";

export const cognitoAuthConfig: AuthProviderProps = {
  authority: `https://cognito-idp.eu-central-1.amazonaws.com/${cognitoUserPoolId}`,
  client_id: cognitoClientId,
  redirect_uri: redirectUri,
  response_type: "code",
  scope: "openid email phone",
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};
