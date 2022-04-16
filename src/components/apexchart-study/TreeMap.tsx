import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const TreeMap = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      data: [
        {
          x: "New Delhi",
          y: 218,
        },
        {
          x: "Kolkata",
          y: 149,
        },
        {
          x: "Mumbai",
          y: 184,
        },
        {
          x: "Ahmedabad",
          y: 55,
        },
        {
          x: "Bangaluru",
          y: 84,
        },
        {
          x: "Pune",
          y: 31,
        },
        {
          x: "Chennai",
          y: 70,
        },
      ],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      id: "basic-bar",
      height: 350,
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
    },
    title: {
      text: "Basic Treemap",
    },
    plotOptions: {
      treemap: {
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: "#CD363A",
            },
            {
              from: 0.001,
              to: 6,
              color: "#52B12C",
            },
          ],
        },
      },
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} type="treemap" series={series} width="400" />
    </ChartLayout>
  );
};

export default TreeMap;
