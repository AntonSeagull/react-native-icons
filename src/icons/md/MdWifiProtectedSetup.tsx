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

export const MdWifiProtectedSetup = (props: IconProps) => {
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
        <Path d="M16.71 5.29 19 3h-8v8l2.3-2.3c1.97 1.46 3.25 3.78 3.25 6.42 0 1.31-.32 2.54-.88 3.63 2.33-1.52 3.88-4.14 3.88-7.13 0-2.52-1.11-4.77-2.84-6.33" />
        <Path d="M7.46 8.88c0-1.31.32-2.54.88-3.63a8.48 8.48 0 0 0-3.88 7.13c0 2.52 1.1 4.77 2.84 6.33L5 21h8v-8l-2.3 2.3c-1.96-1.46-3.24-3.78-3.24-6.42" />
      </G>
    </Svg>
  );
};