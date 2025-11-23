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

export const LuImageUpscale = (props: IconProps) => {
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
        <Path d="M16 3h5v5M17 21h2a2 2 0 0 0 2-2M21 12v3M21 3l-5 5M3 7V5a2 2 0 0 1 2-2M5 21l4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19M9 3h3" />
        <Rect width={10} height={10} x={3} y={11} rx={1} />
      </G>
    </Svg>
  );
};