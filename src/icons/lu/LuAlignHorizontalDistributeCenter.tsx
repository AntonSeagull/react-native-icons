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

export const LuAlignHorizontalDistributeCenter = (props: IconProps) => {
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
        <Rect width={6} height={14} x={4} y={5} rx={2} />
        <Rect width={6} height={10} x={14} y={7} rx={2} />
        <Path d="M17 22v-5M17 7V2M7 22v-3M7 5V2" />
      </G>
    </Svg>
  );
};