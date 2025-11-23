import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const LuChartCandlestick = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 5v4" />
        <Rect width={4} height={6} x={7} y={9} rx={1} />
        <Path d="M9 15v2M17 3v2" />
        <Rect width={4} height={8} x={15} y={5} rx={1} />
        <Path d="M17 13v3M3 3v16a2 2 0 0 0 2 2h16" />
      </G>
    </Svg>
  );
};