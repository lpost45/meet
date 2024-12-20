import React, { PureComponent, useEffect, useState } from 'react';
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

export default function CityEventsChart({ allLocations, events }) {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(getData());
	}, [events, allLocations]);

	const getData = () => {
		const data = allLocations.map((location) => {
			const count = events.filter(
				(event) => event.location === location
			).length;
			const city = location.split(',')[0];
			return { city, count };
		});
		return data;
	};
	return (
		<ResponsiveContainer
			width="100%"
			height={400}
		>
			<ScatterChart
				margin={{
					top: 20,
					right: 20,
					bottom: 20,
					left: 20,
				}}
			>
				<CartesianGrid />
				<XAxis
					type="category"
					dataKey="city"
					name="City"
				/>
				<YAxis
					type="number"
					dataKey="count"
					name="Number of Events"
                    allowDecimals={false}
				/>
				<Tooltip cursor={{ strokeDasharray: '3 3' }} />
				<Scatter
					name="A school"
					data={data}
					fill="#8884d8"
				/>
			</ScatterChart>
		</ResponsiveContainer>
	);
}
