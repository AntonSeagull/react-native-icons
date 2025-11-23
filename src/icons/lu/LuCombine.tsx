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

export const LuCombine = (props: IconProps) => {
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
        <Path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1M7 15l3 3M7 21l3-3H5a2 2 0 0 1-2-2v-2" />
        <Rect width={7} height={7} x={14} y={14} rx={1} />
        <Rect width={7} height={7} x={3} y={3} rx={1} />
      </G>
    </Svg>
  );
};