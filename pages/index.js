import Header from "../components/home/Header";
import { FavCoins } from "../utils/favCoins";

import JumbotronCoins from "../components/home/JumbotronCoinSlider";

export default function Home({ _coinsData }) {
  return (
    <>
      <Header />
      <JumbotronCoins coins={_coinsData} />
    </>
  );
}

export const getStaticProps = async () => {
  const _coinsData = await Promise.all(
    FavCoins.map(async (item) => {
      const _topCoin = await (
        await fetch(`https://api.coingecko.com/api/v3/coins/${item}`)
      ).json();
      const _mktCap = await (
        await fetch(
          `https://api.coingecko.com/api/v3/coins/${item}/market_chart?vs_currency=usd&days=1&interval=hourly`
        )
      ).json();

      return { _topCoin, _mktCap };
    })
  );

  return {
    props: {
      _coinsData,
    },
    revalidate: 10,
  };
};
