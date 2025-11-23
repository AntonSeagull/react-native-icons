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

export const LiaMizuni = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-4.5 5c-.83 0-1.5.67-1.5 1.5V22c.79-.78 1.82-1.41 3-1.8v-8.7c0-.83-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5v8.33c.49-.08.99-.12 1.51-.12.51 0 1 .04 1.49.12V11.5c0-.83-.67-1.5-1.5-1.5m4.5 0c-.83 0-1.5.67-1.5 1.5v8.69c1.18.4 2.21 1.02 3 1.8V11.5c0-.83-.67-1.5-1.5-1.5" />
      </G>
    </Svg>
  );
};