import {
  BarChart2,
  ChevronUp,
  ChevronDown,
  Clock,
  Globe,
  StopCircle,
} from "react-feather";

import { CurrencyFormatter } from "./utils/CurrFormatter";

const MarketCaps = (props) => {
  return (
    <>
      <div className="row align-items-center mb-4">
        <div className="col">
          <h1 className="h4 mb-0">Global Crypto Data</h1>
        </div>
      </div>
      <div className="row mx-n2">
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="icon icon-shape icon-md bg-primary shadow-primary text-white">
                  <Globe className="fas fa-wallet" />
                </div>
              </div>
              <h5 className="h6 font-weight-bolder mb-1">
                {CurrencyFormatter(props._gD.data.total_market_cap.usd)}
              </h5>
              <span className="d-block text-sm text-muted font-weight-bold">
                Market Capitalization
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="icon icon-shape icon-md bg-danger shadow-danger text-white">
                  <Clock className="fas fa-cash-register" />
                </div>
              </div>
              <h5 className="h6 font-weight-bolder mb-1">
                {CurrencyFormatter(props._gD.data.total_volume.usd.toFixed(2))}
              </h5>
              <span className="d-block text-sm text-muted font-weight-bold">
                24h Trading Volume
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="icon icon-shape icon-md bg-warning shadow-warning text-white">
                  <BarChart2 className="fas fa-shopping-basket" />
                </div>
              </div>
              <h5 className="h6 font-weight-bolder mb-1">
                {props._gD.data.market_cap_percentage.btc.toFixed(2)} %
              </h5>
              <span className="d-block text-sm text-muted font-weight-bold">
                Bitcoin Market Cap Dominance
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 px-2">
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="icon icon-shape icon-md bg-success shadow-success text-white">
                  <StopCircle className="fas fa-receipt" />
                </div>
              </div>
              <h5 className="h6 font-weight-bolder mb-1">
                {props._gD.data.active_cryptocurrencies}
              </h5>
              <span className="d-block text-sm text-muted font-weight-bold">
                Active CryptoCurrencies
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketCaps;
