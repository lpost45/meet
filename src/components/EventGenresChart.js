import { useState, useEffect } from "react";
import { 
    ResponsiveContainer,
    PieChart,
    Pie,
    Legend,
    Cell
} from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'Javascript', 'Node', 'jQuery', 'Angular'];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre) => {
            const filteredEvents = events.filter((event) => event.summary.includes(genre));
            return {
                name: genre,
                value: filteredEvents.length
            };
        });
        return data;
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
    };

    const colors = ['#FF5733', '#C70039', '#900C3F', '#66BFBF', '#90BE6D']

    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={130} >
             {data.map((entry, index) => (
                  <Cell 
                  key={`cell-${index}`} 
                  fill={colors[index]} 
                  stroke="#affc41"
                  />
                ))}
                </Pie>
              <Legend 
              align="center" 
              verticalAlign="bottom" 
              layout="horizontal" 
              height={2} 
              />
          </PieChart>
        </ResponsiveContainer>
      );
    }

export default EventGenresChart;