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

export const TbBrandCinema4d = (props: IconProps) => {
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
        <Path d="M9.65 6.956a5.39 5.39 0 0 0 7.494 7.495" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M17.7 12.137A5.738 5.738 0 1 1 11.963 6.4" />
        <Path d="M17.7 12.338v-1.175c0-.47.171-.92.476-1.253a1.56 1.56 0 0 1 1.149-.52c.827 0 1.523.676 1.62 1.573Q21 11.479 21 12M11.662 6.4h1.175c.47 0 .92-.176 1.253-.49s.52-.74.52-1.184c0-.852-.676-1.57-1.573-1.67A10 10 0 0 0 12 3" />
      </G>
    </Svg>
  );
};