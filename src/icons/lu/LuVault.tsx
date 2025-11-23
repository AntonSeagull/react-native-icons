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

export const LuVault = (props: IconProps) => {
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
        <Rect width={18} height={18} x={3} y={3} rx={2} />
        <Circle cx={7.5} cy={7.5} r={0.5} fill="currentColor" />
        <Path d="m7.9 7.9 2.7 2.7" />
        <Circle cx={16.5} cy={7.5} r={0.5} fill="currentColor" />
        <Path d="m13.4 10.6 2.7-2.7" />
        <Circle cx={7.5} cy={16.5} r={0.5} fill="currentColor" />
        <Path d="m7.9 16.1 2.7-2.7" />
        <Circle cx={16.5} cy={16.5} r={0.5} fill="currentColor" />
        <Path d="m13.4 13.4 2.7 2.7" />
        <Circle cx={12} cy={12} r={2} />
      </G>
    </Svg>
  );
};