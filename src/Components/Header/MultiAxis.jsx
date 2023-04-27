import React from "react";
import Chart from "react-apexcharts";

const MultiAxis = () => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className="app">
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="500"
      />
    </div>
  );
};

export default MultiAxis;
