import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const MultiAxis = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "line",
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    yaxis: [
      {
        title: {
          text: "Series A",
        },
      },
      {
        opposite: true,
        title: {
          text: "Series B",
        },
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.5,
        opacityFrom: 0.2,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    stroke: {
      curve: "straight",
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} width="400" />
    </ChartLayout>
  );
};

export default MultiAxis;
