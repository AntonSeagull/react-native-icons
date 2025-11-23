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

export const TbTopologyStarRing3 = (props: IconProps) => {
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
        <Path d="M10 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0M18 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M10 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M18 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 12h4M14 12h4M15 7l-2 3M9 7l2 3M11 14l-2 3M13 14l2 3M10 5h4M10 19h4M17 17l2-3M19 10l-2-3M7 7l-2 3M5 14l2 3" />
      </G>
    </Svg>
  );
};