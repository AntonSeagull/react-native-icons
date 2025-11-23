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

export const BiSolidMusic = (props: IconProps) => {
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
        <Path d="M6 18.573c2.206 0 4-1.794 4-4V4.428L19 7.7v7.43a3.95 3.95 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4V7a1 1 0 0 0-.658-.939l-11-4A1 1 0 0 0 8 3v8.13a3.95 3.95 0 0 0-2-.557c-2.206 0-4 1.794-4 4s1.794 4 4 4" />
      </G>
    </Svg>
  );
};