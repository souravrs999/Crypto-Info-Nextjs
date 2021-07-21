import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

import MarketCaps from "../../components/Coins/MarketCaps";
import CoinList from "../../components/Coins/CoinSummary/CoinsList";
import coinGecko from "../api/coinGecko";

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
        <MarketCaps _gD={props._gD} />
        {/* Coins list section */}
        <CoinList _cD={props._cD} />
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
          pageCount={props._tPC} //page count
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={pagginationHandler}
        />
      </div>
    </section>
  );
}

export const getServerSideProps = async (ctx) => {
  const page = ctx.query.page || 1;

  const [_gD, _cD] = await Promise.all([
    coinGecko.get(`/global`).then((r) => r.data),
    coinGecko
      .get(`/coins/markets`, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: page,
          sparkline: false,
          price_change_percentage: "1h,24h,7d",
        },
      })
      .then((r) => r.data),
  ]);

  return {
    props: {
      _gD: _gD,
      _cD: _cD,
      _tPC: Math.ceil(_gD.data.active_cryptocurrencies / 100),
    },
  };
};
