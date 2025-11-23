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

export const RiVipCrownLine = (props: IconProps) => {
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
        <Path d="M2.005 19h20v2h-20zm0-14 5 3.5 5-6.5 5 6.5 5-3.5v12h-20zm2 3.841V15h16V8.841l-3.42 2.394-4.58-5.955-4.58 5.955z" />
      </G>
    </Svg>
  );
};