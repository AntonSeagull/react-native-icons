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

export const TbBusinessplan = (props: IconProps) => {
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
        <Path d="M11 6a5 3 0 1 0 10 0 5 3 0 1 0-10 0" />
        <Path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6" />
        <Path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4" />
        <Path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3M5 15v1m0-8v1" />
      </G>
    </Svg>
  );
};