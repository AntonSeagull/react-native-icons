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

export const PiTornadoThin = (props: IconProps) => {
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
        <Path d="M228 40a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h168a4 4 0 0 1 4 4m-48 32a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h144a4 4 0 0 0 4-4m-16 32a4 4 0 0 0-4-4H56a4 4 0 0 0 0 8h104a4 4 0 0 0 4-4m16 32a4 4 0 0 0-4-4H88a4 4 0 0 0 0 8h88a4 4 0 0 0 4-4m4 28h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-24 32h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-32 32h-16a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};