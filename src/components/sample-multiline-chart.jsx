import React from "react";
import data from "./data.json";
import { Line } from "@ant-design/charts";

export default function SampleMultiLineChart() {
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: {
      type: "time",
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };
  return <Line {...config}></Line>;
}
