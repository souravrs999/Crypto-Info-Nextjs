import CoinPriceChart from "../../Charts/CoinPriceChart";
import { WithAxesConfig } from "../../Charts/WithAxesConfig";

const CoinChartBlock = (props) => {
  return (
    <div className="row mb-4">
      <div className="col-md-12">
        <div className="card p-3">
          <CoinPriceChart
            mktData={props.mktData}
            chngPrcnt={props.chngPrcnt}
            config={WithAxesConfig}
            pointRadius={2}
            height={"50vh"}
          />
        </div>
      </div>
    </div>
  );
};

export default CoinChartBlock;
