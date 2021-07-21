import CoinPriceChart from "../../Charts/CoinPriceChart";
import { WithAxesConfig } from "../../Charts/WithAxesConfig";

const CoinChartBlock = (props) => {
  return (
    <div className="row mb-4">
      {console.log(props)}
      <div className="col-lg-12 card">
        <CoinPriceChart
          mktData={props.mktData}
          chngPrcnt={props.chngPrcnt}
          config={WithAxesConfig}
          pointRadius={2}
          height={600}
          width={800}
        />
      </div>
    </div>
  );
};

export default CoinChartBlock;
