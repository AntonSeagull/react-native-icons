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

export const TbCliffJumping = (props: IconProps) => {
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
        <Path d="M14 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M10.5 18l2.5 2 2-2M18 21l3-3-4-2-1-5" />
        <Path d="m10.5 7.5 2 3 3.5.5 3-2 .5-3M4 21v-1l2-3 .5-2.5L8 12 7 7l1-3-1-1-2 .5L3 3" />
      </G>
    </Svg>
  );
};