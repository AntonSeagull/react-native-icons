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

export const PiHandGrabbingLight = (props: IconProps) => {
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
        <Path d="M188 82a25.85 25.85 0 0 0-14.59 4.49A26 26 0 0 0 128 75.41 26 26 0 0 0 82 92v22H68a26 26 0 0 0-26 26v12a86 86 0 0 0 172 0v-44a26 26 0 0 0-26-26m14 70a74 74 0 0 1-148 0v-12a14 14 0 0 1 14-14h14v26a6 6 0 0 0 12 0V92a14 14 0 0 1 28 0v28a6 6 0 0 0 12 0V92a14 14 0 0 1 28 0v28a6 6 0 0 0 12 0v-12a14 14 0 0 1 28 0Z" />
      </G>
    </Svg>
  );
};