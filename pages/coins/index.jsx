import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

import MarketCaps from "../../components/Coins/MarketCaps";
import CoinList from "../../components/Coins/CoinsList";

export default function Coins(props) {
  const router = useRouter();

  const pagginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <section className="slice py-5">
      <div className="container">
        {/* Market capitalization data section */}
        <MarketCaps _globalData={props.globalData} />
        {/* Coins list section */}
        <CoinList coinList={props.coinData} />
        <ReactPaginate
          // customization
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"pl-2 pr-2"}
          activeClassName={"page-item active"}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          nextClassName={"page-item"}
          previousClassName={"page-item"}
          nextLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          // logic
          initialPage={0}
          pageCount={props.totalPageCount} //page count
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
          onPageChange={pagginationHandler}
        />
      </div>
    </section>
  );
}

export const getServerSideProps = async (ctx) => {
  const page = ctx.query.page || 1;

  const [globalData, coinData] = await Promise.all([
    fetch(`${process.env.COINGECKO_API_BASE_URL}/global`).then((r) => r.json()),
    fetch(
      `${process.env.COINGECKO_API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
    ).then((r) => r.json()),
  ]);

  return {
    props: {
      globalData: globalData,
      coinData: coinData,
      totalPageCount: Math.ceil(globalData.data.active_cryptocurrencies / 100),
    },
  };
};
