import { Box } from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { PureComponent, useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export default function Diagram({ nilai }) {
  const [studentReport, setStudentReport] = useState(nilai);
  const [server, setServer] = useState([]);
  const mathPoint = parseInt(nilai?.matematika);
  const languagePoint = parseInt(nilai?.bahasa_indonesia);
  const studentPoint = parseInt(nilai?.kejuruan);
  const religionPoint = parseInt(nilai?.pendidikan_agama);
  function dataBase() {
    axios
      .get("http://localhost:8000/server")
      .then((res) => {
        setServer(res?.data);
      })
      .catch((error) => {
        openNotificationEror("bottomRight");
      });
  }
  useEffect(() => {
    dataBase();
  }, []);

  const datax = [
    {
      subject: "Pendidikan Agama Islam",
      A: religionPoint,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Matematika",
      A: mathPoint,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Kejuruan",
      A: studentPoint,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Bahasa Indonesia",
      A: languagePoint,
      B: 100,
      fullMark: 150,
    },
  ];
  return (
    <Box>
      <Box>
        <RadarChart cx={252} cy={165} outerRadius={130} height={320} width={500} data={datax}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill={teal[500]} fillOpacity={0.6} />
        </RadarChart>
      </Box>
    </Box>
  );
}
