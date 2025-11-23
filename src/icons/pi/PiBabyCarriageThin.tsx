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

export const PiBabyCarriageThin = (props: IconProps) => {
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
        <Path d="M160 36h-8a12 12 0 0 0-12 12v60H51.77A36 36 0 0 0 16 76a4 4 0 0 0 0 8 28 28 0 0 1 28 28 76.08 76.08 0 0 0 76 76h40a76 76 0 0 0 0-152m67.87 72H155.4l53.71-43a67.76 67.76 0 0 1 18.76 43M152 44h8a67.72 67.72 0 0 1 43.2 15.52L148 103.68V48a4 4 0 0 1 4-4m8 136h-40a68.08 68.08 0 0 1-67.88-64h175.76A68.08 68.08 0 0 1 160 180m-60 44a12 12 0 1 1-12-12 12 12 0 0 1 12 12m104 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};