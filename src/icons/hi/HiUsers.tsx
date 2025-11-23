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

export const HiUsers = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m8 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-4.07 11q.07-.49.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1zM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5" />
      </G>
    </Svg>
  );
};