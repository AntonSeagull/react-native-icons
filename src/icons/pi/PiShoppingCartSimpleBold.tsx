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

export const PiShoppingCartSimpleBold = (props: IconProps) => {
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
        <Path d="M241.55 64.74A12 12 0 0 0 232 60H60.23l-8.67-31.21A12 12 0 0 0 40 20H20a12 12 0 0 0 0 24h10.88l34.3 123.49a28.09 28.09 0 0 0 27 20.51H191a28.09 28.09 0 0 0 27-20.51l25.63-92.28a12 12 0 0 0-2.08-10.47m-46.75 96.33A4 4 0 0 1 191 164H92.16a4 4 0 0 1-3.85-2.93L66.9 84h149.31ZM108 220a20 20 0 1 1-20-20 20 20 0 0 1 20 20m104 0a20 20 0 1 1-20-20 20 20 0 0 1 20 20" />
      </G>
    </Svg>
  );
};