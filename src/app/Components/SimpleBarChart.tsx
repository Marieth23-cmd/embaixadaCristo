import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function SimpleBarChart({
  data,
  color = "#2563eb",
  height = 260,
}: {
  data: { label: string; value: number }[];
  color?: string;
  height?: number;
}) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
          />
          <YAxis
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
          />
          <Tooltip
            cursor={{ fill: "#f1f5f9" }}
            contentStyle={{
              borderRadius: 8,
              border: "1px solid #e2e8f0",
              fontSize: 12,
            }}
          />
          <Bar dataKey="value" name="Total" fill={color} radius={[6, 6, 0, 0]} maxBarSize={48} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}