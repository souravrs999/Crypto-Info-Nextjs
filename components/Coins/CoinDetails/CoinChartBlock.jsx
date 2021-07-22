import CoinPriceChart from "../../Charts/CoinPriceChart";
import { WithAxesConfig } from "../../Charts/WithAxesConfig";

const CoinChartBlock = (props) => {
  return (
    // <div className="row mb-4">
    //   <div className="col-md-12">
    //     <div className="card p-3">
    //       <CoinPriceChart
    //         mktData={props.mktData}
    //         chngPrcnt={props.chngPrcnt}
    //         config={WithAxesConfig}
    //         pointRadius={2}
    //         height={"50vh"}
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="row">
      <div className="col-lg-12">
        <div className="card card-fluid">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col">
                <span className="h6">{props.title}</span>
              </div>
            </div>
          </div>
          <div className="card-body pt-2 pb-0 px-2">
            <CoinPriceChart
              data={props.data}
              chngPrcnt={props.chngPrcnt}
              config={WithAxesConfig}
              pointRadius={2}
              height={"50vh"}
            />
          </div>
          {/* <div className="card-footer py-3">
            <div className="row mx-md-n2 align-items-center">
              <div className="col-2 px-1 px-1">
                <span className="badge badge-soft-primary badge-pill">
                  <i data-feather="check"></i>1h
                </span>
              </div>

              <div className="col-2 px-1">
                <span className="badge badge-soft-primary badge-pill">
                  <i data-feather="check"></i>24h
                </span>
              </div>

              <div className="col-2 px-1">
                <span className="badge badge-soft-primary badge-pill">
                  <i data-feather="check"></i>7d
                </span>
              </div>
              <div className="col-2 px-1">
                <span className="badge badge-soft-primary badge-pill">
                  <i data-feather="check"></i>14d
                </span>
              </div>
              <div className="col-2 px-1">
                <span className="badge badge-soft-primary badge-pill">
                  <i data-feather="check"></i>30d
                </span>
              </div>
              <div className="col-2 px-1">
                <span className="badge badge-soft-primary badge-pill">
                  <i data-feather="check"></i>1y
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="col-lg-4">
        <div className="card">
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col">
                <span className="h6">Performance</span>
              </div>
              <div className="col-auto ml-auto text-right">
                <span className="h6 text-sm text-muted">3,567.00</span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="">
              <div
                className="progress-circle progress-lg mx-auto"
                id="progress-performance-1"
              ></div>
            </div>
            <hr className="my-4" />
            <div className="d-flex align-items-center mb-2">
              <div>
                <span className="icon icon-shape icon-sm bg-soft-success text-success">
                  <i className="fas fa-caret-up"></i>
                </span>
              </div>
              <div className="pl-2">
                <span className="text-success text-sm font-weight-bold">+23%</span>
              </div>
            </div>
            <p className="mb-0 text-sm text-muted">
              You have a 23% growth in comparison with last month.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CoinChartBlock;
