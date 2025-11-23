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

export const LiaHourglassHalfSolid = (props: IconProps) => {
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
        <Path d="M7 4v2h2v4a7 7 0 0 0 3.406 6A7 7 0 0 0 9 22v4H7v2h18v-2h-2v-4a7 7 0 0 0-3.406-6A7 7 0 0 0 23 10V6h2V4Zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5Zm1.156 5c.446 1.723 1.98 3 3.844 3s3.398-1.277 3.844-3ZM16 17c2.773 0 5 2.227 5 5v4h-1c0-2.21-1.79-4-4-4s-4 1.79-4 4h-1v-4c0-2.773 2.227-5 5-5" />
      </G>
    </Svg>
  );
};