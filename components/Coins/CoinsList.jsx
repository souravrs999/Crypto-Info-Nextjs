import Link from "next/link";
import Image from "next/image";

import Legend from "./Legend";
import { CurrencyFormatter } from "./utils/CurrFormatter";

export default function CoinList({ coinList }) {
  return (
    <div>
      <Legend />
      {coinList.map((coin, idx) => (
        <div className="card mb-3 hover-shadow-lg" key={coin.id}>
          <div className="card-body d-flex align-items-center flex-wrap flex-lg-nowrap py-0 pt-3 pb-3 rounded">
            <Link href={`/coins/${coin.id}`}>
              <a>
                <div className="col-lg-2 d-flex align-items-center col-8 pl-0 pt-3 pt-lg-0 pointer">
                  <Image
                    src={coin.image}
                    width={30}
                    height={30}
                    alt={coin.name}
                    className=""
                  />
                  <span className="h6 text-sm text-light pl-3 pt-2">
                    {coin.name} ({coin.symbol})
                  </span>
                </div>
              </a>
            </Link>
            <div className="col-lg-2 col-8 pl-0 pl-lg-5 pt-3 pt-lg-0">
              <span className="h6 text-sm text-light">
                {coin.price_change_percentage_1h_in_currency.toFixed(2)} %
              </span>
            </div>
            <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
              <span className="h6 text-sm text-light">
                {coin.price_change_percentage_24h_in_currency.toFixed(2)} %
              </span>
            </div>
            <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
              <span className="h6 text-sm text-light">
                {coin.price_change_percentage_7d_in_currency.toFixed(2)} %
              </span>
            </div>
            <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
              <span className="h6 text-sm text-light">
                {CurrencyFormatter(coin.total_volume).split(".")[0]}
              </span>
            </div>
            <div className="col-lg-2 col-8 pl-0 pl-md-2 pt-3 pt-lg-0">
              <span className="h6 text-sm text-light">
                {CurrencyFormatter(coin.market_cap).split(".")[0]}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
