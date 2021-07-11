import Head from "next/head";
import { SEO } from "../utils/seo-config";

export default function Meta() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <title key="title">{SEO.title}</title>
      <meta name="description" content={SEO.description} />
      <meta name="og:title" content={SEO.openGraph.title} />
      <meta name="og:type" content={SEO.openGraph.type} />
      <meta name="keywords" content={SEO.openGraph.keywords} />
      <meta name="og:url" content={SEO.openGraph.url} />
      <meta name="og:description" content={SEO.openGraph.description} />
      <meta name="og:image" content={SEO.openGraph.image} />
      <meta name="propeller" content="410470db0d92f8303850b7aa85fc4bd8" />
    </Head>
  );
}