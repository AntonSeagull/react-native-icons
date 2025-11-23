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

export const PiChalkboardBold = (props: IconProps) => {
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
        <Path d="M240 188h-4V56a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v132h-4a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 60h168v128h-16v-28a12 12 0 0 0-12-12h-64a12 12 0 0 0-12 12v28H84v-88h88v20a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v100H44Zm128 128h-40v-16h40Z" />
      </G>
    </Svg>
  );
};