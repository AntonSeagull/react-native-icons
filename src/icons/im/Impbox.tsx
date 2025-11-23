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

export const Impbox = (props: IconProps) => {
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
        <Path d="M11.5.5 8 3.5l4.5 3 3.5-3zM8 3.5 4.5.5 0 3.5l3.5 3zM12.5 6.5l3.5 3-4.5 2.5L8 9zM8 9 3.5 6.5 0 9.5 4.5 12z" />
        <Path d="M11.377 13.212 8 10.317l-3.377 2.895L2.5 12.033V13.5L8 16l5.5-2.5v-1.467z" />
      </G>
    </Svg>
  );
};