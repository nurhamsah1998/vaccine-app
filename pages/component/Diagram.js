import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Pendidikan Agama Islam",
    A: 80,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Matematika",
    A: 74,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Kejuruan",
    A: 60,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Bahasa Indonesia",
    A: 46,
    B: 100,
    fullMark: 150,
  },
];
export default function Diagram() {
  return (
    <Box>
      <Box>
        <RadarChart cx={252} cy={165} outerRadius={130} height={320} width={500} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill={teal[500]} fillOpacity={0.6} />
        </RadarChart>
      </Box>
    </Box>
  );
}
