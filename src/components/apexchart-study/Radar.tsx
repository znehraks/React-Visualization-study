import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const Radar = () => {
  const [series] = useState<ApexOptions["series"]>([
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
  ]);
  const [options] = useState<ApexOptions>({
    chart: {
      height: 350,
      type: "radar",
    },
    title: {
      text: "Basic Radar Chart",
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
    plotOptions: {
      radar: {
        size: 100,
      },
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} type="radar" width="400" />
    </ChartLayout>
  );
};

export default Radar;
