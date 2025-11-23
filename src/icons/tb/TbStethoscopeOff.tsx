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

export const TbStethoscopeOff = (props: IconProps) => {
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
        <Path d="M4.172 4.179A2 2 0 0 0 3 6v3.5a5.5 5.5 0 0 0 9.856 3.358M14 10V6a2 2 0 0 0-2-2h-1" />
        <Path d="M8 15a6 6 0 0 0 10.714 3.712m1.216-2.798q.07-.45.07-.914v-3M11 3v2" />
        <Path d="M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" />
      </G>
    </Svg>
  );
};