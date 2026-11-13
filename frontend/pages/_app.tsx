import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/style.css";
import "../styles/Contact.css";
import 'animate.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRolesContext.Provider value={appRoles}>
      <UserContext.Provider value={currentUser}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </AppRolesContext.Provider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
