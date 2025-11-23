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

export const PiTiktokLogoBold = (props: IconProps) => {
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
        <Path d="M224 68a44.05 44.05 0 0 1-44-44 12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v132a16 16 0 1 1-22.85-14.47 12 12 0 0 0 6.85-10.84V88a12 12 0 0 0-14.1-11.81 79.35 79.35 0 0 0-47.08 27.74A81.84 81.84 0 0 0 20 156a80 80 0 0 0 160 0v-33.33a107.5 107.5 0 0 0 44 9.33 12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m-12 39.15a83.05 83.05 0 0 1-37-14.91 12 12 0 0 0-19 9.76v54a56 56 0 0 1-112 0 57.86 57.86 0 0 1 32-51.56V124a40 40 0 1 0 64 32V36h17.06A68.21 68.21 0 0 0 212 90.94Z" />
      </G>
    </Svg>
  );
};