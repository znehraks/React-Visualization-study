import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const LineChart = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "line-chart",
      type: "line",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "column-chart",
      type: "column",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 3,
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} width="400" />
    </ChartLayout>
  );
};

export default LineChart;
