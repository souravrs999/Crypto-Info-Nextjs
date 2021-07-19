import {
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  ShoppingBag,
  ShoppingCart,
  BarChart2
} from "react-feather";

import { CurrencyFormatter } from "./utils/CurrFormatter";

const CoinSecondDataBlock = (props) => {
  return (
    <>
      <div class="col-xl-6">
        <div class="card card-fluid">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <ShoppingCart size={17} class="pr-1" /> Market Cap
                </h6>
              </div>
              <div class="col-auto">
                <span class="text-sm">{CurrencyFormatter(props.mktCap)}</span>
              </div>
            </div>
            {/* <hr class="my-3" /> */}
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <PieChart size={17} class="pr-1" /> Total Volume
                </h6>
              </div>
              <div class="col-auto">{CurrencyFormatter(props.totVol)}</div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <ArrowUpRight size={17} class="pr-1" /> 24h High
                </h6>
              </div>
              <div class="col-auto">
                <span class="text-sm">{CurrencyFormatter(props.high24h)}</span>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <ArrowDownRight size={17} class="pr-1" /> 24h Low
                </h6>
              </div>
              <div class="col-auto">
                <span class="text-sm">{CurrencyFormatter(props.low24h)}</span>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <BarChart2 size={17} class="pr-1" /> Price Change 24h
                </h6>
              </div>
              <div
                class={`col-auto text-sm ${
                  props.priceChng24h > 0 ? "text-success" : "text-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng24h)} %
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <BarChart2 size={17} class="pr-1" /> Price Change 7d
                </h6>
              </div>
              <div
                class={`col-auto text-sm ${
                  props.priceChng7d > 0 ? "text-success" : "text-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng7d)} %
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <BarChart2 size={17} class="pr-1" /> Price Change 14d
                </h6>
              </div>
              <div
                class={`col-auto text-sm ${
                  props.priceChng14d > 0 ? "text-success" : "text-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng14d)} %
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-sm mb-0">
                  <BarChart2 size={17} class="pr-1" /> Price Change 30d
                </h6>
              </div>
              <div
                class={`col-auto text-sm ${
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
