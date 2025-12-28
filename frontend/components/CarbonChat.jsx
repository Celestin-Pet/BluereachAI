import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { date: "Jan", carbon: 60 },
  { date: "Feb", carbon: 65 },
  { date: "Mar", carbon: 70 },
  { date: "Apr", carbon: 80 },
];

export default function CarbonChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Carbon Sequestration Trend</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="carbon"
            stroke="#22c55e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
