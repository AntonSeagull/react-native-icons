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

export const PiTextHTwoDuotone = (props: IconProps) => {
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
        <Path d="M240 72v136H56a16 16 0 0 1-16-16V56h184a16 16 0 0 1 16 16" opacity={0.2} />
        <Path d="M248 208a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.16-57.56a16 16 0 1 0-25.54-19.27 16.3 16.3 0 0 0-2.32 4.3 8 8 0 1 1-15.08-5.34 32 32 0 1 1 55.73 29.93L208 200h32a8 8 0 0 1 8 8M144 48a8 8 0 0 0-8 8v52H48V56a8 8 0 0 0-16 0v120a8 8 0 0 0 16 0v-52h88v52a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};