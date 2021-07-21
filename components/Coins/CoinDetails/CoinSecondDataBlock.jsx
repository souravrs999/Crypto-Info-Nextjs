import {
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  ShoppingCart,
  BarChart2,
} from "react-feather";

import { CurrencyFormatter } from "../utils/CurrFormatter";

const CoinSecondDataBlock = (props) => {
  return (
    <>
      <div className="col-xl-6">
        <div className="card card-fluid">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <ShoppingCart size={17} className="pr-1" /> Market Cap
                </h6>
              </div>
              <div className="col-auto">
                <span className="text-sm">{CurrencyFormatter(props.mktCap)}</span>
              </div>
            </div>
            {/* <hr className="my-3" /> */}
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <PieChart size={17} className="pr-1" /> Total Volume
                </h6>
              </div>
              <div className="col-auto">{CurrencyFormatter(props.totVol)}</div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <ArrowUpRight size={17} className="pr-1" /> 24h High
                </h6>
              </div>
              <div className="col-auto">
                <span className="text-sm">{CurrencyFormatter(props.high24h)}</span>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <ArrowDownRight size={17} className="pr-1" /> 24h Low
                </h6>
              </div>
              <div className="col-auto">
                <span className="text-sm">{CurrencyFormatter(props.low24h)}</span>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <BarChart2 size={17} className="pr-1" /> Price Change 24h
                </h6>
              </div>
              <div
                className={`col-auto text-sm ${
                  props.priceChng24h > 0 ? "text-success" : "text-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng24h)} %
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <BarChart2 size={17} className="pr-1" /> Price Change 7d
                </h6>
              </div>
              <div
                className={`col-auto text-sm ${
                  props.priceChng7d > 0 ? "text-success" : "text-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng7d)} %
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <BarChart2 size={17} className="pr-1" /> Price Change 14d
                </h6>
              </div>
              <div
                className={`col-auto text-sm ${
                  props.priceChng14d > 0 ? "text-success" : "text-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng14d)} %
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col">
                <h6 className="text-sm mb-0">
                  <BarChart2 size={17} className="pr-1" /> Price Change 30d
                </h6>
              </div>
              <div
                className={`col-auto text-sm ${
                  props.priceChng30d > 0 ? "text-success" : "text-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng30d)} %
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinSecondDataBlock;
