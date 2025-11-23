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

export const LuWifiSync = (props: IconProps) => {
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
        <Path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5M11.965 14.105h4M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5M2 8.82a15 15 0 0 1 20 0M21.965 22.105v-4M5 12.86a10 10 0 0 1 3-2.032M8.5 16.429h.01" />
      </G>
    </Svg>
  );
};