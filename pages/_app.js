import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import Wrapper from "../components/Wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

export default MyApp;
