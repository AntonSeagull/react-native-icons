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

export const LuBaggageClaim = (props: IconProps) => {
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
        <Path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
        <Path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
        <Rect width={13} height={8} x={8} y={6} rx={1} />
        <Circle cx={18} cy={20} r={2} />
        <Circle cx={9} cy={20} r={2} />
      </G>
    </Svg>
  );
};