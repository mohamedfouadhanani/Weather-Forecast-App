import {
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
} from 'recharts';
import { useTheme } from '../../../../../../contexts/Theme';
import CustomTooltip from './CustomTooltip';

let Chart = ({ data, dataKey, dataValues }) => {
	let { isDarkTheme } = useTheme();

	return (
		<ResponsiveContainer width="100%" height={100}>
			<AreaChart data={data}>
				<CartesianGrid strokeDasharray="4" vertical={false} />
				<Tooltip content={CustomTooltip} />
				<XAxis
					dataKey={dataKey}
					axisLine={false}
					tickSize={4}
					tick={{
						fill: `${isDarkTheme ? '#e5e7eb' : '#4b5563'}`,
						fontSize: 10,
					}}
					interval={4}
				/>
				<defs>
					<linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#fcd34d" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#fcd34d" stopOpacity={0.02} />
					</linearGradient>
					{/* <linearGradient id="colorUV" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#a78bfa" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#ddd6fe" stopOpacity={0.02} />
					</linearGradient> */}
				</defs>
				<Area
					type="monotone"
					dataKey={dataValues[0]}
					stroke="#fbbf24"
					fillOpacity={1}
					fill="url(#colorTemperature)"
					dot={true}
				/>
				{/* <Area
					type="monotone"
					dataKey={dataValues[1]}
					stroke="#a78bfa"
					fillOpacity={1}
					fill="url(#colorUV)"
					dot={true}
				/> */}
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default Chart;
