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

export const Imtter = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3.538a6.5 6.5 0 0 1-1.884.516 3.3 3.3 0 0 0 1.444-1.816 6.6 6.6 0 0 1-2.084.797 3.28 3.28 0 0 0-2.397-1.034 3.28 3.28 0 0 0-3.197 4.028 9.32 9.32 0 0 1-6.766-3.431 3.284 3.284 0 0 0 1.015 4.381A3.3 3.3 0 0 1 .643 6.57v.041A3.28 3.28 0 0 0 3.277 9.83a3.3 3.3 0 0 1-1.485.057 3.29 3.29 0 0 0 3.066 2.281 6.59 6.59 0 0 1-4.862 1.359 9.3 9.3 0 0 0 5.034 1.475c6.037 0 9.341-5.003 9.341-9.341q0-.215-.009-.425a6.6 6.6 0 0 0 1.637-1.697z" />
      </G>
    </Svg>
  );
};