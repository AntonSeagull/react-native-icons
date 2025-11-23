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

export const FaHeadSideCough = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 640 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 320, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M616 304a24 24 0 1 0-24-24 24 24 0 0 0 24 24m-64 112a24 24 0 1 0 24 24 24 24 0 0 0-24-24m-64-56a24 24 0 1 0 24 24 24 24 0 0 0-24-24m128 104a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0-104a24 24 0 1 0 24 24 24 24 0 0 0-24-24m-64-40a24 24 0 1 0 24 24 24 24 0 0 0-24-24m-74.78-45c-21-47.12-48.5-151.75-73.12-186.75A208.13 208.13 0 0 0 234.1 0H192C86 0 0 86 0 192c0 56.75 24.75 107.62 64 142.88V512h224v-32h64a64 64 0 0 0 64-64h-96a32 32 0 0 1 0-64h96v-32h32a32 32 0 0 0 29.22-45M288 224a32 32 0 1 1 32-32 32.07 32.07 0 0 1-32 32" />
      </G>
    </Svg>
  );
};