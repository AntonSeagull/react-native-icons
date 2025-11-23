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

export const RiVipFill = (props: IconProps) => {
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
        <Path d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 5.5v7h2v-7zm-.285 0H8.606l-1.497 4.113L5.612 8.5H3.498l2.611 6.964h2zm5.285 5h1.5a2.5 2.5 0 0 0 0-5h-3.5v7h2zm0-2v-1h1.5a.5.5 0 0 1 0 1z" />
      </G>
    </Svg>
  );
};