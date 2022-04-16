import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const AreaChart = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "area-chart",
      type: "area",
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

export default AreaChart;
