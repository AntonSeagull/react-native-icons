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

export const LiaUtensilsSolid = (props: IconProps) => {
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
        <Path d="M11 5C9.363 5 8.137 6.21 7.313 7.563 6.488 8.914 6 10.516 6 12c0 2.582 1.781 4.465 4 4.906V28h2V16.906c2.219-.441 4-2.324 4-4.906 0-1.484-.488-3.086-1.312-4.437S12.637 5 11 5m7 0v7c0 1.852 1.281 3.398 3 3.844V28h2V15.844c1.719-.446 3-1.992 3-3.844V5h-2v7c0 1.117-.883 2-2 2s-2-.883-2-2V5Zm3 0v7c0 .55.45 1 1 1s1-.45 1-1V5ZM11 7c.574 0 1.344.566 1.969 1.594C13.594 9.62 14 10.996 14 12c0 2.004-1.25 3-3 3s-3-.996-3-3c0-1.004.406-2.379 1.031-3.406S10.426 7 11 7" />
      </G>
    </Svg>
  );
};