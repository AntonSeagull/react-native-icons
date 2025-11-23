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

export const HiUserGroup = (props: IconProps) => {
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
        <Path d="M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-4 7a4 4 0 0 0-8 0v3h8zM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 10v-3a6 6 0 0 0-.75-2.906A3.005 3.005 0 0 1 19 15v3zM4.75 12.094A6 6 0 0 0 4 15v3H1v-3a3 3 0 0 1 3.75-2.906" />
      </G>
    </Svg>
  );
};