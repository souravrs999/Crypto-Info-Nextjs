import React from "react";
import { Line } from "react-chartjs-2";
import { historyOptions } from "./Config";

export default function CoinPriceChart({ mktData, chngPrcnt }) {
  // format data as per chartsj
  function formatData(data) {
    return data.map((el) => {
      return {
        x: new Date(el[0]).toLocaleString(),
        y: el[1].toFixed(2),
      };
    });
  }

  const data = {
    datasets: [
      {
        data: formatData(mktData.prices),
        borderColor: chngPrcnt > 0 ? "#5cc9a7" : "#f25767",
        borderWidth: 3,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div>
      {/* <h2>Line Example</h2> */}
      <Line data={data} options={historyOptions} width={100} height={50} />
    </div>
  );
}
