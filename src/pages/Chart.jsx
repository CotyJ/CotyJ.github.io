import { useEffect } from 'react';
import {  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const Chart = ({data, theme}) => {

  const style = { width: '100%', maxWidth: '700px', maxHeight: '60vh', aspectRatio: 1.618 , margin: '0.1rem', padding: '0.5rem', fontSize: 'x-small'};

  const chartStyleLight = {stroke: "#000", fill: "#3376c3ff"};
  const chartStyleDark  = {stroke: "#fff", fill: "#3376c3ff"};
  const margins = {top: 10, right: 10, left: 10, bottom: 10};
  const tooltipContentStyle = {
    backgroundColor: '#ddd',
    border: '1px solid #5e5e5e',
    borderRadius: '6px',
    color: '#000'
  };

  useEffect(() => {}, [theme])

  return (
    <div className="chart">
      <AreaChart
        style={style}
        data={data}
        margin={margins}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"/>
        <YAxis width="auto"/>
        <Tooltip
          contentStyle={tooltipContentStyle}
          itemStyle={{ color: '#000'}}
        />
        <Area type="monotone" dataKey="price"
          stroke={theme === 'dark' ? chartStyleDark.stroke : chartStyleLight.stroke}
          fill={theme === 'dark' ? chartStyleDark.fill : chartStyleLight.fill}
          />
      </AreaChart>
    </div>
  );
}

export default Chart;