import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartLayout from "../../Layouts/ChartLayout/ChartLayout";

const Donut = () => {
  const [series] = useState<ApexOptions["series"]>([44, 55, 41, 17, 15]);
  const [options] = useState<ApexOptions>({
    labels: ["A", "B", "C", "D", "E"],
  });
  return (
    <ChartLayout>
      <Chart options={options} series={series} type="donut" width="400" />
    </ChartLayout>
  );
};

export default Donut;
