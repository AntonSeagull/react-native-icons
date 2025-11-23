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

export const LiaSith = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m4 4 3.734 6.361L5 10l3.248 4.059A8 8 0 0 0 8 16c0 .67.092 1.318.248 1.941L5 22l2.734-.361L4 28l6.361-3.734L10 27l4.059-3.248A8 8 0 0 0 16 24a8 8 0 0 0 1.941-.248L22 27l-.361-2.734L28 28l-3.734-6.361L27 22l-3.248-4.059A8 8 0 0 0 24 16a8 8 0 0 0-.248-1.941L27 10l-2.734.361L28 4l-6.361 3.734L22 5l-4.059 3.248A8 8 0 0 0 16 8a8 8 0 0 0-1.941.248L10 5l.361 2.734zm12 6c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6m0 2a4 4 0 0 0 0 8 4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};