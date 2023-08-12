import React from 'react';
import { Container, Box } from "@mui/material";
import PlotlyLineChart from './PlotlyLineChart';

const App: React.FC = () => {

  const chartData = [
    { x: '2023-01-01', y: 10 },
    { x: '2023-01-02', y: 15 },
    { x: '2023-01-03', y: 7 },
    // ... Add more data points as needed
  ];

  return (
    <Container>
      <PlotlyLineChart data={chartData} title="My Line Chart" />
    </Container>
  );
}

export default App;
