import React from 'react';
import {
	Chart,
	Interval,
	Tooltip,
	Axis,
	Coordinate,
	Interaction,
	getTheme
} from 'bizcharts';

export default function Labelline(props) {
	// const 

	const cols = {
		percent: {
			formatter: val => {
				val = val * 100 + '%';
				return val;
			},
		},
	};


	return (
		<Chart height={400} data={props.data} scale={cols} autoFit
			onIntervalClick={e => {
				const states = e.target.cfg.element.getStates();// 如果是选中，值为['selected'];取消选中，值为[]
			}}
			onGetG2Instance={(c)=>{
				// console.log(c.getXY(data[0]))
			}}
			>
			<Coordinate type="theta" radius={0.75} />
			<Tooltip showTitle={false} />
			<Axis visible={false} />
			<Interval
				position="percent"
				adjust="stack"
				color="item"
				style={{
					lineWidth: 1,
					stroke: '#fff',
				}}
				label={['count', {
					// label 太长自动截断
					layout: { type: 'limit-in-plot', cfg: { action: 'ellipsis' } },
					content: (data) => {
						return `${data.item}: ${data.percent * 100}%`;
					},
				}]}
				state={{
					selected: {
						style: (t) => {
							const res = getTheme().geometries.interval.rect.selected.style(t);
							return { ...res, fill: 'red' }
						}
					}
				}}
			/>
			<Interaction type='element-single-selected' />
		</Chart>
	);
}


