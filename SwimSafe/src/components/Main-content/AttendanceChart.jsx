import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", present: 320 },
  { day: "Tue", present: 330 },
  { day: "Wed", present: 310 },
  { day: "Thu", present: 340 },
  { day: "Fri", present: 335 },
  { day: "Sat", present: 300 },
];

function AttendanceChart() {
  return (
    <ResponsiveContainer width="90%" height="100%">
      <BarChart data={data} margin={{top:10,right: 40}}>
        <XAxis dataKey="day" stroke="white"/>

        <YAxis stroke="white"/>

        <Tooltip />

        <Bar
          dataKey="present"
          fill="rgba(31, 42, 72, 0.95)"
          radius={[6,6,0,0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AttendanceChart;