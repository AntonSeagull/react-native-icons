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

export const TbFriendsOff = (props: IconProps) => {
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
        <Path d="M5 5a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M5 22v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 22v-4h-2l1.254-3.763m1.036-2.942A1 1 0 0 1 16 11h2a1 1 0 0 1 1 1l1.503 4.508M19 19v3M3 3l18 18" />
      </G>
    </Svg>
  );
};