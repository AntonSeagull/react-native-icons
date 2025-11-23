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

export const LiaTwitter = (props: IconProps) => {
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
        <Path d="M28 8.559a9.8 9.8 0 0 1-2.828.773 4.94 4.94 0 0 0 2.164-2.723 9.9 9.9 0 0 1-3.125 1.196 4.924 4.924 0 0 0-8.52 3.367q0 .582.13 1.121A13.96 13.96 0 0 1 5.67 7.148a4.9 4.9 0 0 0-.667 2.477c0 1.707.867 3.215 2.191 4.098a4.9 4.9 0 0 1-2.23-.618v.063a4.92 4.92 0 0 0 3.95 4.828 4.9 4.9 0 0 1-2.224.086 4.93 4.93 0 0 0 4.598 3.422A9.88 9.88 0 0 1 4 23.539a13.92 13.92 0 0 0 7.547 2.215c9.058 0 14.012-7.504 14.012-14.012 0-.21-.008-.426-.016-.637A10.1 10.1 0 0 0 28 8.56" />
      </G>
    </Svg>
  );
};