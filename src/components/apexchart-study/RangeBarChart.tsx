import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const RangeBarChart = () => {
  const [series, setSeries] = useState<ApexOptions["series"]>([
    {
      name: "range",
      data: [
        {
          x: "TEAM A",
          y: [65, 96],
        },
        {
          x: "TEAM B",
          y: [55, 78],
        },
        {
          x: "TEAM C",
          y: [95, 186],
        },
      ],
    },
  ]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      id: "basic-bar",
      type: "rangeBar",
    },
    title: {
      text: "RangeBarChart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} width="400" />
    </ChartLayout>
  );
};

export default RangeBarChart;
