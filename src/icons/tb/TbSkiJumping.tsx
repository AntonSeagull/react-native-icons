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

export const TbSkiJumping = (props: IconProps) => {
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
        <Path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M17 17.5 12 13V7l5 4M7 17.5l5-4.5" />
        <Path d="m15.103 21.58 6.762-14.502a2 2 0 0 0-.968-2.657M8.897 21.58 2.135 7.077a2 2 0 0 1 .968-2.657M7 11l5-4" />
      </G>
    </Svg>
  );
};