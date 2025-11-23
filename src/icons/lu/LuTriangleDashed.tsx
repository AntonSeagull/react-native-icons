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

export const LuTriangleDashed = (props: IconProps) => {
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
        <Path d="M10.17 4.193a2 2 0 0 1 3.666.013M14 21h2M15.874 7.743l1 1.732M18.849 12.952l1 1.732M21.824 18.18a2 2 0 0 1-1.835 2.824M4.024 21a2 2 0 0 1-1.839-2.839M5.136 12.952l-1 1.732M8 21h2M8.102 7.743l-1 1.732" />
      </G>
    </Svg>
  );
};