import { useEffect } from "react";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

import "../styles/globals.css";
import LayoutModule from "../layout/Layout";
import * as gtag from "../lib/gtag";

const progress = new ProgressBar({
  size: 3,
  className: "bar-of-progress",
  delay: 10,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);
  return (
    <LayoutModule>
      <Component {...pageProps} />
    </LayoutModule>
  );
}

export default MyApp;
