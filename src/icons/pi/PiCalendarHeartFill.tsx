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

export const PiCalendarHeartFill = (props: IconProps) => {
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
        <Path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 64v-8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0m82.56 103.07a143.5 143.5 0 0 1-24.77 16.51 4 4 0 0 1-3.58 0 143.5 143.5 0 0 1-24.77-16.51C84.56 153 76 138.51 76 124a28 28 0 0 1 52-14.41A28 28 0 0 1 180 124c0 14.51-8.56 29-25.44 43.07M184 64a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};