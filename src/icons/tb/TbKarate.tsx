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

export const TbKarate = (props: IconProps) => {
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
        <Path d="M17 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 9l4.5 1 3 2.5M13 21v-8l3-5.5" />
        <Path d="m8 4.5 4 2 4 1 4 3.5-2 3.5" />
      </G>
    </Svg>
  );
};