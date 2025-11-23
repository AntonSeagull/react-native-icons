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

export const PiOrangeDuotone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 152a80 80 0 1 1-80-80 80 80 0 0 1 80 80" opacity={0.2} />
        <Path d="M165.87 72.58A64.06 64.06 0 0 0 200 16a8 8 0 0 0-8-8h-8a64 64 0 0 0-56 33.06A64 64 0 0 0 72 8h-8a8 8 0 0 0 0 16h8a48.08 48.08 0 0 1 47.4 40.42 88 88 0 1 0 46.47 8.16M183.33 24a48.09 48.09 0 0 1-46.66 40 48.09 48.09 0 0 1 46.66-40M128 224a72 72 0 1 1 72-72 72.08 72.08 0 0 1-72 72m55.89-62.68a57.5 57.5 0 0 1-46.57 46.57 8.5 8.5 0 0 1-1.32.11 8 8 0 0 1-1.31-15.89 41.29 41.29 0 0 0 33.43-33.43 8 8 0 0 1 15.78 2.64Z" />
      </G>
    </Svg>
  );
};