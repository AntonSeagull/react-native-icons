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

export const PiAlienFill = (props: IconProps) => {
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
        <Path d="M128 16a96.11 96.11 0 0 0-96 96c0 24 12.56 55.06 33.61 83 21.18 28.15 44.5 45 62.39 45s41.21-16.81 62.39-45c21.05-28 33.61-59 33.61-83a96.11 96.11 0 0 0-96-96M64 116a12 12 0 0 1 12-12 36 36 0 0 1 36 36 12 12 0 0 1-12 12 36 36 0 0 1-36-36m80 84h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m12-48a12 12 0 0 1-12-12 36 36 0 0 1 36-36 12 12 0 0 1 12 12 36 36 0 0 1-36 36" />
      </G>
    </Svg>
  );
};