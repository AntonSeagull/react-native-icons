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

export const PiArmchairFill = (props: IconProps) => {
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
        <Path d="M240 132a28 28 0 0 1-24 27.71V200a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-40.29A28 28 0 1 1 72 132v36a8 8 0 0 0 16 0v-24h80v24a8 8 0 0 0 16 0v-36a28 28 0 0 1 56 0M44 88a44.06 44.06 0 0 1 43.81 40h80.38A44.06 44.06 0 0 1 212 88a4 4 0 0 0 4-4V72a40 40 0 0 0-40-40H80a40 40 0 0 0-40 40v12a4 4 0 0 0 4 4" />
      </G>
    </Svg>
  );
};