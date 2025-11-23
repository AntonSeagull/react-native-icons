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

export const ImrEmpty = (props: IconProps) => {
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
        <Path d="m16 6.204-5.528-.803L8 .392 5.528 5.401 0 6.204l4 3.899-.944 5.505L8 13.009l4.944 2.599L12 10.103zm-8 5.569-3.492 1.836.667-3.888L2.35 6.968l3.904-.567L8 2.864l1.746 3.537 3.904.567-2.825 2.753.667 3.888z" />
      </G>
    </Svg>
  );
};