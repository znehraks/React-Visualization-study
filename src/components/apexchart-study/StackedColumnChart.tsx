import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const StackedColumnChart = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "PRODUCT A",
      type: "bar",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      type: "bar",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "PRODUCT C",
      type: "bar",
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: "PRODUCT D",
      type: "bar",
      data: [21, 7, 25, 13, 22, 8],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} width="400" />
    </ChartLayout>
  );
};

export default StackedColumnChart;
