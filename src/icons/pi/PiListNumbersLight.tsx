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

export const PiListNumbersLight = (props: IconProps) => {
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
        <Path d="M222 128a6 6 0 0 1-6 6H104a6 6 0 0 1 0-12h112a6 6 0 0 1 6 6M104 70h112a6 6 0 0 0 0-12H104a6 6 0 0 0 0 12m112 116H104a6 6 0 0 0 0 12h112a6 6 0 0 0 0-12M42.68 53.37 50 49.71V104a6 6 0 0 0 12 0V40a6 6 0 0 0-8.68-5.37l-16 8a6 6 0 0 0 5.36 10.74M72 202H52l21.48-28.74A21.5 21.5 0 0 0 77.79 157 21.75 21.75 0 0 0 69 142.38a22.86 22.86 0 0 0-31.35 4.31 22.2 22.2 0 0 0-3.28 5.92 6 6 0 0 0 11.28 4.11 9.9 9.9 0 0 1 1.48-2.67 10.78 10.78 0 0 1 14.78-2 9.9 9.9 0 0 1 4 6.61 9.64 9.64 0 0 1-2 7.28l-.06.09-28.65 38.38A6 6 0 0 0 40 214h32a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};