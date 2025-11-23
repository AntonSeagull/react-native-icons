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

export const PiAmbulanceDuotone = (props: IconProps) => {
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
        <Path d="M248 120v64a8 8 0 0 1-8 8h-24a24 24 0 0 0-32-22.63A24 24 0 0 0 168 192h-64a24 24 0 0 0-48 0H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h152v56Z" opacity={0.2} />
        <Path d="M80 120a8 8 0 0 1 8-8h16V96a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8m176 0v64a16 16 0 0 1-16 16h-17a32 32 0 0 1-62 0h-50a32 32 0 0 1-62 0H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h152a8 8 0 0 1 8 8v8h34.58a15.93 15.93 0 0 1 14.86 10.06l14 35A7.9 7.9 0 0 1 256 120m-64-32v24h44.18l-9.6-24ZM32 184h17a32 32 0 0 1 62 0h50a32.1 32.1 0 0 1 15-19.69V72H32Zm64 8a16 16 0 1 0-16 16 16 16 0 0 0 16-16m112 0a16 16 0 1 0-16 16 16 16 0 0 0 16-16m32-8v-56h-48v32a32.06 32.06 0 0 1 31 24Z" />
      </G>
    </Svg>
  );
};