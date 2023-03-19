import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

const BusinessChart = ({ data }) => {
  return (
    <BarChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="pass" />
      <XAxis dataKey="fail" />
      <XAxis dataKey="not_attempted" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pass" fill="green" />
      <Bar dataKey="fail" fill="red" />
      <Bar dataKey="not_attempted" fill="blue" />
    </BarChart>
  );
};

export default BusinessChart;