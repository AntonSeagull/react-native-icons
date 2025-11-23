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

export const CgEditFade = (props: IconProps) => {
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
        <Path stroke="currentColor" strokeOpacity={0.3} strokeWidth={4} d="M8 12c0-1.48.804-2.773 2-3.465v6.93A4 4 0 0 1 8 12Z" />
        <Path stroke="currentColor" strokeOpacity={0.6} strokeWidth={4} d="M14 15.465v-6.93c1.196.692 2 1.984 2 3.465s-.804 2.773-2 3.465Z" />
        <Path stroke="currentColor" strokeWidth={2} d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z" />
      </G>
    </Svg>
  );
};