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

export const BiSolidBuoy = (props: IconProps) => {
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
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m7.736 8h-3.16A5.02 5.02 0 0 0 14 7.424V4.263A8.02 8.02 0 0 1 19.736 10M12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3M10 4.263v3.161A5.02 5.02 0 0 0 7.424 10h-3.16A8.02 8.02 0 0 1 10 4.263M4.264 14h3.16A5.02 5.02 0 0 0 10 16.576v3.161A8.02 8.02 0 0 1 4.264 14M14 19.737v-3.161A5.02 5.02 0 0 0 16.576 14h3.16A8.02 8.02 0 0 1 14 19.737" />
      </G>
    </Svg>
  );
};