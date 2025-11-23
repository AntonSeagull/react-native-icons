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

export const TbWalk = (props: IconProps) => {
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
        <Path d="M12 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 21l3-4M16 21l-2-4-3-3 1-6" />
        <Path d="m6 12 2-3 4-1 3 3 3 1" />
      </G>
    </Svg>
  );
};