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

export const PiBankThin = (props: IconProps) => {
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
        <Path d="M24 100h28v72H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8h-20v-72h28a4 4 0 0 0 2.1-7.41l-104-64a4 4 0 0 0-4.2 0l-104 64A4 4 0 0 0 24 100m36 0h40v72H60Zm88 0v72h-40v-72Zm48 72h-40v-72h40ZM128 36.7 217.87 92H38.13ZM244 208a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h224a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};