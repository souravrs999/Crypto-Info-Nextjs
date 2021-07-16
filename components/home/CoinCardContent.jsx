import { TrendingDown, TrendingUp } from "react-feather";

import CoinPriceChart from "../Charts/CoinPriceChart";

export default function CoinCardContent({ coinName, chngPrcnt, mktData }) {
  return (
    <>
      <div className="mt-3">
        <div className="d-flex">
          <h6 className="mb-2">{coinName}</h6>
          <div className="text-right ml-3">
            <div className="d-flex align-items-center">
              <div>
                {chngPrcnt > 0 ? (
                  <TrendingUp size={12} className="text-success" />
                ) : (
                  <TrendingDown size={12} className="text-danger" />
                )}
              </div>
              <div className="pl-2">
                <small
                  className={`h6 text-xs ${
                    chngPrcnt > 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {chngPrcnt.toFixed(2)} %
                </small>
              </div>
            </div>
          </div>
        </div>
        <CoinPriceChart
          className="pt-0 bg-dark-success"
          mktData={mktData}
          chngPrcnt={chngPrcnt}
        />
      </div>
    </>
  );
}
