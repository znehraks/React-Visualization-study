import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const BarChart = () => {
  const newSeries = [
    {
      name: "series-1",
      data: [
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
        +Math.floor(Math.random() * 100 + 1).toFixed(0),
      ],
    },
  ];
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} type="bar" width="400" />
      <button onClick={() => setSeries(newSeries)}>데이터 변경</button>
    </ChartLayout>
  );
};

export default BarChart;
