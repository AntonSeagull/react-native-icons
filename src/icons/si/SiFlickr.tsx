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

export const SiFlickr = (props: IconProps) => {
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
        <Path d="M5.334 6.666a5.335 5.335 0 0 0 0 10.668A5.333 5.333 0 0 0 10.666 12a5.333 5.333 0 0 0-5.332-5.334m13.332 0A5.333 5.333 0 0 0 13.334 12 5.333 5.333 0 1 0 24 12a5.335 5.335 0 0 0-5.334-5.334" />
      </G>
    </Svg>
  );
};