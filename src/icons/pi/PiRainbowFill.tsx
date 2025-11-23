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

export const PiRainbowFill = (props: IconProps) => {
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
        <Path d="M128 48A120.13 120.13 0 0 0 8 168v16a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8v-16A120.13 120.13 0 0 0 128 48m32 128a8 8 0 0 1-8-8 24 24 0 0 0-48 0 8 8 0 0 1-16 0 40 40 0 0 1 80 0 8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8 56 56 0 0 0-112 0 8 8 0 0 1-16 0 72 72 0 0 1 144 0 8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8 88 88 0 0 0-176 0 8 8 0 0 1-16 0 104 104 0 0 1 208 0 8 8 0 0 1-8 8" />
      </G>
    </Svg>
  );
};