import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Dataflow
const data = [
  { name: "Jan", inflow: 32, mrr: 20, gmv: 10 },
  { name: "Feb", inflow: 28, mrr: 18, gmv: 8 },
  { name: "Mar", inflow: 30, mrr: 15, gmv: 7 },
  { name: "Apr", inflow: 15, mrr: 10, gmv: 5 },
  { name: "May", inflow: 18, mrr: 12, gmv: 6 },
  { name: "Jun", inflow: 35, mrr: 50, gmv: 20 },
  { name: "Jul", inflow: 25, mrr: 30, gmv: 18 },
  { name: "Aug", inflow: 32, mrr: 22, gmv: 15 },
  { name: "Sep", inflow: 33, mrr: 20, gmv: 8 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded px-3 py-0 border-2 text-xs shadow">
        <div className="font-semibold mb-1">{label}</div>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: entry.color }}
            />
            <span>{entry.name}: </span>
            <span className="font-bold">{entry.value}m</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const AnalyticsBarChart = () => (
  <ResponsiveContainer width="100%" height={150}>
    <BarChart
      data={data}
      margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
      barGap={4}
    >
      <YAxis
        tick={{ fontSize: 12, fill: "#bdbdbd" }}
        axisLine={false}
        tickLine={false}
        width={32}
        domain={[0, 50]}
        ticks={[0, 10, 20, 30, 40, 50]}
        tickFormatter={(v) => `${v}m`}
      />
      <XAxis
        dataKey="name"
        tick={{ fontSize: 12, fill: "#bdbdbd" }}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f3f4f6" }} />
      <Legend verticalAlign="top" height={1} iconType="circle" />
      <Bar dataKey="inflow" name="Inflow" fill="#2563eb" barSize={14} radius={[4, 4, 0, 0]} />
      <Bar dataKey="mrr" name="MRR" fill="#22c55e" barSize={14} radius={[4, 4, 0, 0]} />
      <Bar dataKey="gmv" name="GMV" fill="#ef4444" barSize={14} radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export default AnalyticsBarChart;