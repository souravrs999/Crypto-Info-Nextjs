import Link from "next/link";
import Image from "next/image";

import Legend from "./Legend";
import { CurrencyFormatter } from "./utils/CurrFormatter";

export default function CoinList({ coinList }) {
  return (
    <div>
      <Legend>
        {coinList.map((coin, idx) => (
          <tr className="shadow" key={coin.id}>
            {/* coin icon name and symbol */}

            <th scope="row tdata">
              <div className="media align-items-center">
                <div>
                  <div className="avatar-parent-child">
                    <Image
                      alt={coin.name}
                      src={coin.image}
                      className="avatar rounded-circle"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div className="media-body ml-4">
                  <Link href={`/coins/${coin.id}`}>
                    <a href="users.html#" className="name h6 mb-0 text-sm">
                      {coin.name}
                    </a>
                  </Link>
                  <small className="d-block font-weight-bold h7">
                    {coin.symbol}
                  </small>
                </div>
              </div>
            </th>

            {/* coin current price */}
            <td className="tdata">
              <h5 className="h6">${coin.current_price}</h5>
            </td>
            {/* coin 1h change percentage */}
            <td className="tdata">
              <h5
                className={`h6 ${
                  coin.price_change_percentage_1h_in_currency > 0
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {coin.price_change_percentage_1h_in_currency === null
                  ? "-"
                  : coin.price_change_percentage_1h_in_currency.toFixed(2) +
                    "%"}
              </h5>
            </td>
            {/* coin 24h change percentage */}
            <td className="tdata">
              <h5
                className={`h6 ${
                  coin.price_change_percentage_24h_in_currency > 0
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {coin.price_change_percentage_24h_in_currency === null
                  ? "-"
                  : coin.price_change_percentage_24h_in_currency.toFixed(2) +
                    "%"}
              </h5>
            </td>
            {/* coin 7d change percentage */}
            <td className="tdata">
              <h5
                className={`h6 ${
                  coin.price_change_percentage_7d_in_currency > 0
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {coin.price_change_percentage_7d_in_currency === null
                  ? "-"
                  : coin.price_change_percentage_7d_in_currency.toFixed(2) +
                    "%"}
              </h5>
            </td>
            {/* coin total market volume */}
            <td className="tdata">
              <h5 className="h6">
                {CurrencyFormatter(coin.total_volume).split(".")[0]}
              </h5>
            </td>
            {/* coin market cap */}
            <td className="tdata">
              <h5 className="h6">
                {CurrencyFormatter(coin.market_cap).split(".")[0]}
              </h5>
            </td>
          </tr>
        ))}
      </Legend>
    </div>
  );
}
