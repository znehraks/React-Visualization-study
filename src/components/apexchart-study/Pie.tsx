import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const Pie = () => {
  const [series] = useState<ApexOptions["series"]>([44, 55, 41, 17, 15]);
  const [options] = useState<ApexOptions>({
    labels: ["A", "B", "C", "D", "E"],
    plotOptions: {
      pie: {
        customScale: 0.9,
      },
    },
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} type="pie" width="400" />
    </ChartLayout>
  );
};

export default Pie;
