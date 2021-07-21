import coinGecko from "./api/coinGecko";
import Header from "../components/Home/Hero";
import { FavCoins } from "../utils/favCoins";
import JumbotronCoins from "../components/Home/JumbotronCoinSlider";
import MidContentTileSection from "../components/Home/MidContentTileSections";

const Home = (props) => {
  return (
    <>
      <Header />
      <JumbotronCoins coins={props._cD} />
      <MidContentTileSection noCoins={props._aC.length} />
    </>
  );
};

export const getServerSideProps = async () => {
  // @Params
  //   _cD - coinData holds the coin details of 10 top market cap coins
  //   _tC - topCoins holds data for the top coins
  //   _mC - marketCap holds the data regarding the market data for each coin
  //   _aC - holds data regarding all the supported coins from coingecko

  const _cD = await Promise.all(
    FavCoins.map(async (item) => {
      const _tC = await coinGecko.get(`/coins/${item}`).then((r) => r.data);
      const _mC = await coinGecko
        .get(`/coins/${item}/market_chart`, {
          params: {
            vs_currency: "usd",
            days: 1,
            interval: "hourly",
          },
        })
        .then((r) => r.data);
      return { _tC, _mC };
    })
  );
  const _aC = await coinGecko
    .get(`/coins/list`, {
      params: {
        include_platform: false,
      },
    })
    .then((r) => r.data);
  return { props: { _cD: _cD, _aC: _aC } };
};

export default Home;
