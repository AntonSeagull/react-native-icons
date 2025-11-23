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

export const LuBusFront = (props: IconProps) => {
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
        <Path d="M4 6 2 7M10 6h4M22 7l-2-1" />
        <Rect width={16} height={16} x={4} y={3} rx={2} />
        <Path d="M4 11h16M8 15h.01M16 15h.01M6 19v2M18 21v-2" />
      </G>
    </Svg>
  );
};