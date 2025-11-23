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

export const PiBreadThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M236 80a36 36 0 0 0-36-36H48a36 36 0 0 0-12 69.94V200a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-86.06A36.07 36.07 0 0 0 236 80M44 200v-84.23a35 35 0 0 0 4 .23 4 4 0 0 0 0-8 28 28 0 0 1 0-56h96a28 28 0 0 1 0 56 4 4 0 0 0 0 8 35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4m156-92a4 4 0 0 0 0 8 35 35 0 0 0 4-.23V200a4 4 0 0 1-4 4h-44.7a11.8 11.8 0 0 0 .7-4v-86.06A36 36 0 0 0 166.59 52H200a28 28 0 0 1 0 56" />
      </G>
    </Svg>
  );
};