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

export const LiaGlobeAfricaSolid = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c.338 0 .67.02 1 .05V7h-2l-1 3h-1v1h5l1 1h1v1l-1 1-4-1-4 3v3l2 2h3v2.5l1 2.5h1l3-4v-1l1-2v-1h-1l-1-2 1-1 1.5 1 2.5-1v-1h1.809c.12.65.191 1.316.191 2 0 6.065-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5" />
      </G>
    </Svg>
  );
};