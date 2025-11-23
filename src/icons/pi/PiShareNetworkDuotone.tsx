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

export const PiShareNetworkDuotone = (props: IconProps) => {
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
        <Path d="M208 200a32 32 0 1 1-32-32 32 32 0 0 1 32 32M176 88a32 32 0 1 0-32-32 32 32 0 0 0 32 32" opacity={0.2} />
        <Path d="M176 160a39.9 39.9 0 0 0-28.62 12.09l-46.1-29.63a39.8 39.8 0 0 0 0-28.92l46.1-29.63a40 40 0 1 0-8.66-13.45l-46.1 29.63a40 40 0 1 0 0 55.82l46.1 29.63A40 40 0 1 0 176 160m0-128a24 24 0 1 1-24 24 24 24 0 0 1 24-24M64 152a24 24 0 1 1 24-24 24 24 0 0 1-24 24m112 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24" />
      </G>
    </Svg>
  );
};