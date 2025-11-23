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

export const LiaDizzySolid = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5m-6.293 5.293-1.414 1.414 1.793 1.793-1.793 1.793 1.414 1.414 1.793-1.793 1.793 1.793 1.414-1.414-1.793-1.793 1.793-1.793-1.414-1.414-1.793 1.793zm9 0-1.414 1.414 1.793 1.793-1.793 1.793 1.414 1.414 1.793-1.793 1.793 1.793 1.414-1.414-1.793-1.793 1.793-1.793-1.414-1.414-1.793 1.793zM16 18c-2.206 0-4 1.525-4 3.4 0 1.725 1.346 2.6 4 2.6s4-.875 4-2.6c0-1.875-1.794-3.4-4-3.4m0 2c1.084 0 2 .641 2 1.4 0 .164 0 .6-2 .6s-2-.436-2-.6c0-.759.916-1.4 2-1.4" />
      </G>
    </Svg>
  );
};