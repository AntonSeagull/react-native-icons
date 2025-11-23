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

export const TbUniverse = (props: IconProps) => {
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
        <Path d="M7.027 11.477a5 5 0 1 0 5.496-4.45 4.95 4.95 0 0 0-3.088.681" />
        <Path d="M5.636 5.636a9 9 0 1 0 3.555-2.188" />
        <Path d="M17 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  );
};