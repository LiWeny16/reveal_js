import React from "react"
import ReactDOM from "react-dom"
import { Chart, Line, Point, Tooltip, getTheme } from "bizcharts"

// console.log(getTheme())

// 数据源

export default function LineChart(props) {
  return (
    <>
      <Chart
        appendPadding={[50, 20, 20, 50]}
        autoFit
        height={500}
        data={props.data}
        color="pink"
        padding={"2vh"}
        // onLineClick={console.log}
        scale={{
          value: { min: "100", alias: "Factor", type: "linear-strict" },
          year: { range: [0, 1] }
        }}
      >
        <Line color={props.color ?? undefined} position="year*value" />
        <Point color={props.color ?? undefined} position="year*value" />

        <Tooltip showCrosshairs follow={true} color="pink" />
      </Chart>
    </>
  )
}
