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

export const LiaPrescriptionSolid = (props: IconProps) => {
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
        <Path d="M6 3v16h2v-6h4.994l4.776 8.828L13.107 29h2.385l3.9-6h.215l3.9 6h2.386l-4.649-7.148L25.24 15h-2.314l-3.412 5.85-4.483-8.29A5 5 0 0 0 18 8c0-2.757-2.243-5-5-5H6m2 2h5c1.654 0 3 1.346 3 3s-1.346 3-3 3H8z" />
      </G>
    </Svg>
  );
};