import { useEffect } from "react";
import { useRouter } from "next/router";

import * as gtag from "../libs/gtag";
import Analytics from "../components/GoogleAnalytics";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}

export default MyApp;
