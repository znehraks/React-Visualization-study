import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const ColumnChart = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "area-chart",
      type: "bar",
      data: [
        {
          x: "category A",
          y: 15,
          goals: [
            {
              name: "A Expected",
              value: 20,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "category B",
          y: 20,
          goals: [
            {
              name: "A Expected",
              value: 30,
              strokeColor: "#775DD0",
            },
          ],
        },
        {
          x: "category C",
          y: 50,
          goals: [
            {
              name: "A Expected",
              value: 75,
              strokeColor: "#775DD0",
            },
          ],
        },
      ],
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
      size: 2,
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} width="400" />
    </ChartLayout>
  );
};

export default ColumnChart;
