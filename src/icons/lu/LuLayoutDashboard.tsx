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

export const LuLayoutDashboard = (props: IconProps) => {
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
        <Rect width={7} height={9} x={3} y={3} rx={1} />
        <Rect width={7} height={5} x={14} y={3} rx={1} />
        <Rect width={7} height={9} x={14} y={12} rx={1} />
        <Rect width={7} height={5} x={3} y={16} rx={1} />
      </G>
    </Svg>
  );
};