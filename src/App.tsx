import React from "react";
import styled from "styled-components";
import AreaChart from "./components/apexchart-study/AreaChart";
import BarChart from "./components/apexchart-study/BarChart";
import BoxPlot from "./components/apexchart-study/BoxPlot";
import CandleStick from "./components/apexchart-study/Candlestick";
import ColumnChart from "./components/apexchart-study/ColumnChart";
import Donut from "./components/apexchart-study/Donut";
import HeatMap from "./components/apexchart-study/HeatMap";
import LineChart from "./components/apexchart-study/LineChart";
import MultiAxis from "./components/apexchart-study/MultiAxis";
import Pie from "./components/apexchart-study/Pie";
import Radar from "./components/apexchart-study/Radar";
import RangeBarChart from "./components/apexchart-study/RangeBarChart";
import StackedColumnChart from "./components/apexchart-study/StackedColumnChart";
import TreeMap from "./components/apexchart-study/TreeMap";
const Wrapper = styled.div`
  width: 99vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const App = () => {
  return (
    <Wrapper>
      <BarChart />
      <LineChart />
      <AreaChart />
      <ColumnChart />
      <StackedColumnChart />
      <BoxPlot />
      <CandleStick />
      <RangeBarChart />
      <HeatMap />
      <TreeMap />
      <MultiAxis />
      <Pie />
      <Donut />
      <Radar />
    </Wrapper>
  );
};

export default App;
