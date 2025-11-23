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

export const PiShoppingCartSimpleThin = (props: IconProps) => {
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
        <Path d="M235.18 69.58A4 4 0 0 0 232 68H54.15l-10.3-37.07A4 4 0 0 0 40 28H16a4 4 0 0 0 0 8h21l35.89 129.35A20.06 20.06 0 0 0 92.16 180H191a20.06 20.06 0 0 0 19.27-14.65l25.63-92.28a4 4 0 0 0-.72-3.49m-32.67 93.63A12 12 0 0 1 191 172H92.16a12 12 0 0 1-11.56-8.79L56.37 76h170.37ZM100 216a12 12 0 1 1-12-12 12 12 0 0 1 12 12m104 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};