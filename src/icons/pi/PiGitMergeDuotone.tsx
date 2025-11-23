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

export const PiGitMergeDuotone = (props: IconProps) => {
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
        <Path d="M104 56a24 24 0 1 1-24-24 24 24 0 0 1 24 24" opacity={0.2} />
        <Path d="M208 112a32.05 32.05 0 0 0-30.69 23l-42.21-6a8 8 0 0 1-4.95-2.71L94.43 84.55A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-67.37l30 35a24 24 0 0 0 14.83 8.14l44 6.28A32 32 0 1 0 208 112M64 56a16 16 0 1 1 16 16 16 16 0 0 1-16-16m32 144a16 16 0 1 1-16-16 16 16 0 0 1 16 16m112-40a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  );
};