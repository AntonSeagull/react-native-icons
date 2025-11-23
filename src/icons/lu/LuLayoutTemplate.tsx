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

export const LuLayoutTemplate = (props: IconProps) => {
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
        <Rect width={18} height={7} x={3} y={3} rx={1} />
        <Rect width={9} height={7} x={3} y={14} rx={1} />
        <Rect width={5} height={7} x={16} y={14} rx={1} />
      </G>
    </Svg>
  );
};