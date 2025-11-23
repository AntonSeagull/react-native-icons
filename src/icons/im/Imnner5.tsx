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

export const Imnner5 = (props: IconProps) => {
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
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m4.773 8.773C11.498 14.048 9.803 14.75 8 14.75s-3.498-.702-4.773-1.977S1.25 9.803 1.25 8s.702-3.498 1.977-4.773l1.061 1.061a5.256 5.256 0 0 0 0 7.425c.992.992 2.31 1.538 3.712 1.538s2.721-.546 3.712-1.538a5.256 5.256 0 0 0 0-7.425l1.061-1.061C14.048 4.502 14.75 6.197 14.75 8s-.702 3.498-1.977 4.773" />
      </G>
    </Svg>
  );
};