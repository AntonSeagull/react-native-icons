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

export const PiQueueFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 112H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m92.44 22.66-48 32A8 8 0 0 1 144 192a8 8 0 0 1-8-8v-64a8 8 0 0 1 12.44-6.66l48 32a8 8 0 0 1 0 13.32" />
      </G>
    </Svg>
  );
};