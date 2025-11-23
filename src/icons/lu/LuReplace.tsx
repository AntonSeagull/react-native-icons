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

export const LuReplace = (props: IconProps) => {
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
        <Path d="M14 4a1 1 0 0 1 1-1M15 10a1 1 0 0 1-1-1M21 4a1 1 0 0 0-1-1M21 9a1 1 0 0 1-1 1M3 7l3 3 3-3" />
        <Path d="M6 10V5a2 2 0 0 1 2-2h2" />
        <Rect width={7} height={7} x={3} y={14} rx={1} />
      </G>
    </Svg>
  );
};