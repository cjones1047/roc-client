import React from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';

interface DataPoint {
  x: string; // datetime in ISO format, e.g., '2021-01-01T00:00:00Z'
  y: number;
}

interface PlotlyLineChartProps {
  data: DataPoint[];
  title?: string;
}

const PlotlyLineChart: React.FC<PlotlyLineChartProps> = ({ data, title }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Plot
        data={[
          {
            type: 'scatter',
            mode: 'lines+markers',
            x: data.map(point => point.x),
            y: data.map(point => point.y),
            marker: { color: 'blue' },
          },
        ]}
        layout={{
          title: title,
          xaxis: {
            type: 'date',
            title: 'Date',
          },
          yaxis: {
            title: 'Value',
          },
          width: 800,  // You can adjust this value
          height: 500  // And this one too
        }}
      />
    </Box>
  );
}

export default PlotlyLineChart;
