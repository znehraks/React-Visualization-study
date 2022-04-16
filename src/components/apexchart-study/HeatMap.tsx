import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const HeatMap = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "Series 1",
      data: [
        {
          x: "W1",
          y: 22,
        },
        {
          x: "W2",
          y: 29,
        },
        {
          x: "W3",
          y: 13,
        },
        {
          x: "W4",
          y: 32,
        },
      ],
    },
    {
      name: "Series 2",
      data: [
        {
          x: "W1",
          y: 5,
        },
        {
          x: "W2",
          y: 23,
        },
        {
          x: "W3",
          y: 1,
        },
        {
          x: "W4",
          y: 22,
        },
      ],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "heatmap",
      id: "basic-bar",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#000"],
    // plotOptions: {
    //   heatmap: {
    //     colorScale: {
    //       ranges: [
    //         {
    //           from: -30,
    //           to: 5,
    //           color: "eeeeee",
    //           name: "low",
    //         },
    //         {
    //           from: 6,
    //           to: 20,
    //           color: "#555555",
    //           name: "medium",
    //         },
    //         {
    //           from: 21,
    //           to: 45,
    //           color: "#000000",
    //           name: "high",
    //         },
    //       ],
    //     },
    //   },
    // },
  });
  return (
    <ChartLayout>
      <Chart options={options} type="heatmap" series={series} width="400" />
    </ChartLayout>
  );
};

export default HeatMap;
