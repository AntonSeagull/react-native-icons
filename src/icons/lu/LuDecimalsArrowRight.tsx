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

export const LuDecimalsArrowRight = (props: IconProps) => {
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
        <Path d="M10 18h10M17 21l3-3-3-3M3 11h.01" />
        <Rect width={5} height={8} x={15} y={3} rx={2.5} />
        <Rect width={5} height={8} x={6} y={3} rx={2.5} />
      </G>
    </Svg>
  );
};