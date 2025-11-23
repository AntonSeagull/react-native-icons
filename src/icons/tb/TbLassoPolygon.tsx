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

export const TbLassoPolygon = (props: IconProps) => {
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
        <Path d="M4.028 13.252 3 10l2-7 7 5 8-3 1 9-9 3-5.144-1.255" />
        <Path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M5 17c0 1.42.316 2.805 1 4" />
      </G>
    </Svg>
  );
};