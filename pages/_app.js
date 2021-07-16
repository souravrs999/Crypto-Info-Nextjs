import { useEffect } from "react";
import { useRouter } from "next/router";

// Style imports
import "../styles/globals.css";

// Layout module
import LayoutModule from "../layout/Layout";

import * as gtag from "../lib/gtag";

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
    <LayoutModule>
      <Component {...pageProps} />
    </LayoutModule>
  );
}

export default MyApp;
