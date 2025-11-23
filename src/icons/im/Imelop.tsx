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

export const Imelop = (props: IconProps) => {
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
        <Path d="M14.5 2h-13C.675 2 0 2.675 0 3.5v10c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-10c0-.825-.675-1.5-1.5-1.5M6.23 8.6 2 11.895V4.057zM2.756 4h10.488L8 7.938zm3.639 4.777L8 10.5l1.605-1.723L12.895 13h-9.79zM9.77 8.6 14 4.057v7.838z" />
      </G>
    </Svg>
  );
};