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

export const PiCactusFill = (props: IconProps) => {
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
        <Path d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h48v-72h-8a64.07 64.07 0 0 1-64-64 24.07 24.07 0 0 1 24.08-24h.4A23.55 23.55 0 0 1 64 71.52V72a16 16 0 0 0 16 16h8V56a40 40 0 0 1 80 0v72h8a16 16 0 0 0 16-16v-.48A23.55 23.55 0 0 1 215.52 88h.4A24.07 24.07 0 0 1 240 112a64.07 64.07 0 0 1-64 64h-8v32h48a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};