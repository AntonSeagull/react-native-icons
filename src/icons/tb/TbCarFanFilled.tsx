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

export const TbCarFanFilled = (props: IconProps) => {
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
        <Path d="m12.363 2.068 4.912 1.914a2.7 2.7 0 0 1 .68 4.646l-3.045 2.371L21 11a1 1 0 0 1 .932 1.363l-1.914 4.912a2.7 2.7 0 0 1-4.646.68L13 14.908V21a1 1 0 0 1-1.363.932l-4.912-1.914a2.7 2.7 0 0 1-.68-4.646L9.09 13H3a1 1 0 0 1-.932-1.363l1.914-4.912a2.7 2.7 0 0 1 4.646-.68l2.371 3.044L11 3a1 1 0 0 1 1.363-.932" />
      </G>
    </Svg>
  );
};