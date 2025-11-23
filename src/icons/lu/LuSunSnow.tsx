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

export const LuSunSnow = (props: IconProps) => {
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
        <Path d="M10 21v-1M10 4V3M10 9a3 3 0 0 0 0 6M14 20l1.25-2.5L18 18M14 4l1.25 2.5L18 6" />
        <Path d="m17 21-3-6 1.5-3H22M17 3l-3 6 1.5 3M2 12h1" />
        <Path d="m20 10-1.5 2 1.5 2M3.64 18.36l.7-.7M4.34 6.34l-.7-.7" />
      </G>
    </Svg>
  );
};