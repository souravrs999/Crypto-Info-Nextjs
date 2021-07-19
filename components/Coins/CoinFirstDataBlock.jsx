import Image from "next/image";

import { CurrencyFormatter } from "./utils/CurrFormatter";

const CoinFirstDataBlock = (props) => {
  return (
    <div class="col-xl-6">
      {console.log(props)}
      <div class="card card-fluid">
        <div class="card-header">
          <div class="row align-items-center">
            <div class="col-auto">
              <a class="avatar rounded-circle">
                <Image
                  alt="Image placeholder"
                  src={props.coinImage.large}
                  layout="fill"
                />
              </a>
            </div>
            <div class="col ml-md-n2">
              <a href="profile.html#!" class="d-block h6 mb-0">
                {props.coinName}
              </a>{" "}
              <small class="d-block text-muted">$ {props.currentPrice}</small>
            </div>
            <div class="col-auto">
              <button
                type="button"
                class="btn btn-xs btn-primary btn-icon rounded-pill"
              >
                <span class="btn-inner--text">#{props.marketCR}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-4 text-center">
              <span class="h6 mb-0">
                {
                  CurrencyFormatter(props.coinTotSup)
                    .replace("$", "")
                    .split(".")[0]
                }
              </span>{" "}
              <span class="d-block text-sm">Total Supply</span>
            </div>
            <div class="col-4 text-center">
              <span class="h6 mb-0">
                {
                  CurrencyFormatter(props.coinCirSup)
                    .replace("$", "")
                    .split(".")[0]
                }
              </span>
              <span class="d-block text-sm">Circulating Supply</span>
            </div>
            <div class="col-4 text-center">
              <span class="h6 mb-0">
                {
                  CurrencyFormatter(props.coinMaxSup)
                    .replace("$", "")
                    .split(".")[0]
                }
              </span>
              <span class="d-block text-sm">Max Supply</span>
            </div>
          </div>
        </div>
        <div class="card-footer py-2">
          <div class="row align-items-center">
            <div class="col-6">
              <h5 class="text-sm text-muted pt-2">Price change in 1h</h5>
            </div>
            <div class="col-6 text-right">
              <button
                type="button"
                class={`btn btn-xs rounded-pill ${
                  props.priceChng1h > 0 ? "btn-success" : "btn-danger"
                }`}
              >
                {CurrencyFormatter(props.priceChng1h)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinFirstDataBlock;
