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

export const PiTornadoDuotone = (props: IconProps) => {
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
        <Path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity={0.2} />
        <Path d="M232 40a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h168a8 8 0 0 1 8 8m-48 32a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8m-16 32a8 8 0 0 0-8-8H56a8 8 0 0 0 0 16h104a8 8 0 0 0 8-8m16 32a8 8 0 0 0-8-8H88a8 8 0 0 0 0 16h88a8 8 0 0 0 8-8m0 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-24 32h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m-32 32h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16" />
      </G>
    </Svg>
  );
};