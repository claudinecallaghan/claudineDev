import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import Wrapper from "../components/Wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Claudine</title>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default MyApp;
