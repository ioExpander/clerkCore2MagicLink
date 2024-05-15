import { frFR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClerkProvider telemetry={false} localization={frFR} {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </>
  );
}

export default MyApp;
