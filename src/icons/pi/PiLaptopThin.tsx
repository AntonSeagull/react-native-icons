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

export const PiLaptopThin = (props: IconProps) => {
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
        <Path d="M232 172h-12V72a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v100H24a4 4 0 0 0-4 4v16a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20v-16a4 4 0 0 0-4-4M44 72a12 12 0 0 1 12-12h144a12 12 0 0 1 12 12v100H44Zm184 120a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-12h200ZM148 88a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};