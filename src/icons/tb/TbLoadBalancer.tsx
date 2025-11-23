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

export const TbLoadBalancer = (props: IconProps) => {
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
        <Path d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 16v3M12 10V3M9 6l3-3 3 3M12 10V3" />
        <Path d="m9 6 3-3 3 3M14.894 12.227l6.11-2.224M17.159 8.21l3.845 1.793-1.793 3.845M9.101 12.214l-6.075-2.211M6.871 8.21l-3.845 1.793 1.793 3.845" />
      </G>
    </Svg>
  );
};