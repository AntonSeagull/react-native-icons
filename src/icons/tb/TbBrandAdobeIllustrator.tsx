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

export const TbBrandAdobeIllustrator = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12" />
        <Path d="m12.947 15.79-.82-2.653m-4.864 2.652.82-2.652m0 0 .687-2.218c.558-1.806.838-2.708 1.335-2.708.498 0 .777.902 1.336 2.708l.686 2.218m-4.043 0h4.043M15.789 15.789v-4.736M15.789 8.684v-.473" />
      </G>
    </Svg>
  );
};