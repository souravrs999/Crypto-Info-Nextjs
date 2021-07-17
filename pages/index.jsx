import Header from "../components/Home/Header";
import { FavCoins } from "../utils/favCoins";

import JumbotronCoins from "../components/Home/JumbotronCoinSlider";
import MidContentTileSection from "../components/Home/MidContentTileSections";

export default function Home({ _coinsData, _allCoins }) {
  return (
    <>
      <Header />
      <JumbotronCoins coins={_coinsData} />
      <MidContentTileSection noCoins={_allCoins.length} />
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
  const _allCoins = await (
    await fetch(
      `https://api.coingecko.com/api/v3/coins/list?include_platform=false`
    )
  ).json();

  return {
    props: {
      _coinsData,
      _allCoins,
    },
    revalidate: 2,
  };
};
