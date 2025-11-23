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

export const PiRainbowLight = (props: IconProps) => {
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
        <Path d="M182 168v16a6 6 0 0 1-12 0v-16a42 42 0 0 0-84 0v16a6 6 0 0 1-12 0v-16a54 54 0 0 1 108 0m-54-86a86.1 86.1 0 0 0-86 86v16a6 6 0 0 0 12 0v-16a74 74 0 0 1 148 0v16a6 6 0 0 0 12 0v-16a86.1 86.1 0 0 0-86-86m0-32A118.13 118.13 0 0 0 10 168v16a6 6 0 0 0 12 0v-16a106 106 0 0 1 212 0v16a6 6 0 0 0 12 0v-16A118.13 118.13 0 0 0 128 50" />
      </G>
    </Svg>
  );
};