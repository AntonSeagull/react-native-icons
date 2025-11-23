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

export const LuSlack = (props: IconProps) => {
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
        <Rect width={3} height={8} x={13} y={2} rx={1.5} />
        <Path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
        <Rect width={3} height={8} x={8} y={14} rx={1.5} />
        <Path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
        <Rect width={8} height={3} x={14} y={13} rx={1.5} />
        <Path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
        <Rect width={8} height={3} x={2} y={8} rx={1.5} />
        <Path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
      </G>
    </Svg>
  );
};