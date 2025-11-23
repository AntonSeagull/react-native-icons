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

export const GiThorHammer = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m266.033 32.42-85.238 85.238v19.799L285.832 32.42zm41.528 3.728L184.523 159.186l168.291 168.29L475.852 204.44 307.56 36.15zm172.02 190.02L374.542 331.205h19.799l85.238-85.238v-19.799zm-239.903 13.627-9.9 9.9 32.527 32.528 9.9-9.9zm-22.627 22.627-23.528 23.527h47.055zm-41.528 41.527-27.255 27.256h65.054l27.256-27.256zm-45.255 45.256-27.254 27.254h65.054l27.254-27.254zm-27.254 45.254 23.527 23.527 23.527-23.527zm-21.729 3.728-9.898 9.899 32.527 32.527 9.898-9.898-32.527-32.527zm-38.767 18.899-7.504 22.512 37.388 37.388 22.512-7.504v-12.414L54.93 417.086z" />
      </G>
    </Svg>
  );
};