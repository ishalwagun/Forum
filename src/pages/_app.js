import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Fatan Forum</title>
      </Head>
      <Component {...pageProps} />
    </>
    // </Provider>
  );
}
