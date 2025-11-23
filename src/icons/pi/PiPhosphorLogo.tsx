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

export const PiPhosphorLogo = (props: IconProps) => {
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
        <Path d="M152 32H72a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80 8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144M80 70.54 130.32 160H80Zm56 66.92L85.68 48H136ZM80.51 176H136v55.5A64.14 64.14 0 0 1 80.51 176M152 160V48a56 56 0 0 1 0 112" />
      </G>
    </Svg>
  );
};