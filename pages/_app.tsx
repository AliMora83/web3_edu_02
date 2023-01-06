import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <Component {...pageProps} />;
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
