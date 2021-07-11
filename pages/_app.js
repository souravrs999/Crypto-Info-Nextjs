// Style imports
import "../styles/globals.css";

// Layout module
import LayoutModule from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutModule>
      <Component {...pageProps} />
    </LayoutModule>
  );
}

export default MyApp;
