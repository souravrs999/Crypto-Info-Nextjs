export default function TrendingCoins({ trendingCoins }) {
  return (
    <>
      {/* trending coins */}
      <div className="container">
        <section className="row row--grid">
          {/* title */}
          <div className="col-12">
            <div className="main__title">
              <h2>Trending Cryptocurrencies</h2>
              {/* {console.log(trendingCoins)} */}
              <a href="authors.html" className="main__link">
                View all{" "}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                </svg>
              </a>
            </div>
          </div>
          {/* end title */}

          {/* coins list */}
          <div className="col-12">
            <ul className="sellers-list">
              {trendingCoins.coins.map((coin) => (
                <li key={coin.item.coin_id}>
                  {/* <span className="sellers-list__number">1</span> */}
                  <div className="sellers-list__author sellers-list__author--verified">
                    <img src={coin.item.small} alt="" />
                    <a href={coin.item.id}>
                      {coin.item.name} ({coin.item.symbol})
                    </a>
                    <span>{String(coin.item.price_btc).slice(0, 9)} BTC</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* end coins list */}
        </section>
        {/* end top coins */}
      </div>
    </>
  );
}
