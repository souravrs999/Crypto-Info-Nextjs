import Image from "next/image";

import { CurrencyFormatter } from "./utils/CurrFormatter";

const CoinFirstDataBlock = (props) => {
  return (
    <div className="col-xl-6">
      <div className="card card-fluid">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col-auto">
              <a className="avatar rounded-circle">
                <Image
                  alt="Image placeholder"
                  src={props.coinImage.large}
                  layout="fill"
                />
              </a>
            </div>
            <div className="col ml-md-n2">
              <a href="profile.html#!" className="d-block h6 mb-0">
                {props.coinName}
              </a>{" "}
              <small className="d-block text-muted">$ {props.currentPrice}</small>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-xs btn-primary btn-icon rounded-pill"
              >
                <span className="btn-inner--text">#{props.marketCR}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-4 text-center">
              <span className="h6 mb-0">
                {
                  CurrencyFormatter(props.coinTotSup)
                    .replace("$", "")
                    .split(".")[0]
                }
              </span>{" "}
              <span className="d-block text-sm">Total Supply</span>
            </div>
            <div className="col-4 text-center">
              <span className="h6 mb-0">
                {
                  CurrencyFormatter(props.coinCirSup)
                    .replace("$", "")
                    .split(".")[0]
                }
              </span>
              <span className="d-block text-sm">Circulating Supply</span>
            </div>
            <div className="col-4 text-center">
              <span className="h6 mb-0">
                {
                  CurrencyFormatter(props.coinMaxSup)
                    .replace("$", "")
                    .split(".")[0]
                }
              </span>
              <span className="d-block text-sm">Max Supply</span>
            </div>
          </div>
        </div>
        <div className="card-footer py-2">
          <div className="row align-items-center">
            <div className="col-6">
              <h5 className="text-sm text-muted pt-2">Price change in 1h</h5>
            </div>
            <div className="col-6 text-right">
              <button
                type="button"
                className={`btn btn-xs rounded-pill ${
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
