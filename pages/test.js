import { useState, useEffect } from "react";
import CoinPriceChart from "../components/Charts/CoinPriceChart";

export default function test({_mktCap}) {
  return (
    <>
      <CoinPriceChart mktData={_mktCap}/>
    </>
  );
}

export const getStaticProps = async () => {
  const _mktCap = await (
    await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly`
    )
  ).json();

  return {
    props: {
      _mktCap,
    },
    revalidate: 10,
  };
};
