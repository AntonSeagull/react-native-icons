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

export const LiaTwitterSquare = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm11.69 3.629c-1.75 0-3.208 1.578-2.801 3.525a8.14 8.14 0 0 1-5.914-3 2.83 2.83 0 0 0-.39 1.448 2.87 2.87 0 0 0 1.278 2.388 2.9 2.9 0 0 1-1.295-.361v.033a2.87 2.87 0 0 0 2.297 2.818 3.1 3.1 0 0 1-1.295.053 2.87 2.87 0 0 0 2.682 1.99 5.75 5.75 0 0 1-3.56 1.225A6 6 0 0 1 9 20.715 8.13 8.13 0 0 0 13.406 22c5.276 0 8.164-4.371 8.164-8.164 0-.123 0-.248-.01-.371a6 6 0 0 0 1.438-1.488 5.7 5.7 0 0 1-1.652.447 2.86 2.86 0 0 0 1.26-1.58 5.6 5.6 0 0 1-1.82.691 2.86 2.86 0 0 0-2.097-.906" />
      </G>
    </Svg>
  );
};