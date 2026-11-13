import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState, type ReactNode } from "react";
import { AuthProvider } from "react-oidc-context";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import "../styles/Contact.css";
import "animate.css";
import { cognitoAuthConfig } from "../services/auth/cognitoAuthConfig";

function CognitoProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <>{children}</>;
  }

  return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CognitoProvider>
      <Component {...pageProps} />
    </CognitoProvider>
  );
}
