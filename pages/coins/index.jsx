import MarketCaps from "../../components/Coins/MarketCaps";
import CoinList from "../../components/Coins/CoinsList";

export default function Coins({ _globalData, _allCoins }) {
  return (
    <section className="slice py-5">
      <div className="container">
        {/* Market capitalization data section */}
        <MarketCaps _globalData={_globalData} />
        {/* Coins list section */}
        <CoinList coinList={_allCoins} />
      </div>
    </section>
  );
}

export const getStaticProps = async () => {
  const _globalData = await (
    await fetch(`https://api.coingecko.com/api/v3/global`)
  ).json();
  const _allCoins = await (
    await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
    )
  ).json();

  return {
    props: {
      _globalData,
      _allCoins,
    },
    revalidate: 60,
  };
};
