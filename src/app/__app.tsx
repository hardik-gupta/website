import type { AppProps } from "next/app";
import Layout from "./layout";
import { listenToHeightChanges } from "wix-height-updater";

function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  listenToHeightChanges(window.Wix, window);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
