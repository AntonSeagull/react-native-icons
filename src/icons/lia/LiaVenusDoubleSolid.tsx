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

export const LiaVenusDoubleSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11 3c-4.41 0-8 3.59-8 8 0 4.07 3.059 7.441 7 7.938V23H6v2h4v4h2v-4h8v4h2v-4h4v-2h-4v-4.062c3.941-.497 7-3.868 7-7.938 0-4.41-3.59-8-8-8-1.52 0-2.945.45-4.156 1.188.52.445 1 .949 1.406 1.5A5.94 5.94 0 0 1 21 5c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6c0-.797.156-1.555.438-2.25a5 5 0 0 0-1.407-1.687A7.94 7.94 0 0 0 13 11c0 4.07 3.059 7.441 7 7.938V23h-8v-4.094a8 8 0 0 0 3.156-1.093c-.52-.446-1-.95-1.406-1.5A5.94 5.94 0 0 1 11 17c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6c0 .797-.156 1.555-.437 2.25.335.664.82 1.234 1.406 1.688A7.94 7.94 0 0 0 19 11c0-4.41-3.59-8-8-8" />
      </G>
    </Svg>
  );
};