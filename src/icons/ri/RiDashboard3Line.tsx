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

export const RiDashboard3Line = (props: IconProps) => {
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
        <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m3.833 3.337a.596.596 0 0 1 .763.067.59.59 0 0 1 .063.76q-3.27 4.569-3.598 4.897a1.5 1.5 0 0 1-2.122-2.122q.56-.56 4.894-3.602M17.5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m2.318-3.596a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414M12 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </G>
    </Svg>
  );
};