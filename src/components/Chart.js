import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { gases } from "../constants";
import { generateRandomColors } from "../utils";

const size = Object.keys(gases).length;

const Chart = ({ data, parameter }) => {
  let keys = Object.keys(data[0]).filter(
    (key) => !["time", "date", "id"].includes(key)
  );

  if (parameter) {
    keys = [parameter];
  }

  const colors = generateRandomColors(size);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend formatter={(value) => gases[value] || value} />
        {keys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[size % index]}
            name={gases[key] || key}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
