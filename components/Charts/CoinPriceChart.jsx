import React from "react";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/router";

const CoinPriceChart = (props) => {
  const router = useRouter();

  // format data as per chartsj
  function formatData(data) {
    return data.map((el) => {
      return {
        x: new Date(el[0]).toLocaleString().substr(11, 5),
        y: el[1].toFixed(2),
      };
    });
  }

  const data = {
    datasets: [
      {
        label: router.query.slug,
        fill: true,
        data: formatData(props.mktData.prices),
        borderColor: props.chngPrcnt > 0 ? "#5cc9a7" : "#f25767",
        backgroundColor:
          props.chngPrcnt > 0
            ? "rgba(92, 201, 167, 0.2)"
            : "rgba(242, 87, 103, 0.2)",
        borderWidth: 3,
        pointRadius: props.pointRadius,
        pointHoverRadius: 5,
        borderCapStyle: "butt",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  return (
    <div
      className="chart-container"
      style={{ width: "100%", height: props.height }}
    >
      <Line data={data} options={props.config} />
    </div>
  );
};

export default CoinPriceChart;
