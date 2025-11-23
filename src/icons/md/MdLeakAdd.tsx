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

export const MdLeakAdd = (props: IconProps) => {
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
        <Path d="M6 3H3v3c1.66 0 3-1.34 3-3m8 0h-2a9 9 0 0 1-9 9v2c6.08 0 11-4.93 11-11m-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7m0 18h2a9 9 0 0 1 9-9v-2c-6.07 0-11 4.93-11 11m8 0h3v-3c-1.66 0-3 1.34-3 3m-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7" />
      </G>
    </Svg>
  );
};