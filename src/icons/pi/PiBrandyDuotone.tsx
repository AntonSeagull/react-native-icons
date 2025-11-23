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

export const PiBrandyDuotone = (props: IconProps) => {
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
        <Path d="M216 88a88 88 0 0 1-176 0Z" opacity={0.2} />
        <Path d="M224 88a95.63 95.63 0 0 0-15.53-52.37 8 8 0 0 0-6.7-3.63H54.23a8 8 0 0 0-6.7 3.63A95.63 95.63 0 0 0 32 88a96.12 96.12 0 0 0 88 95.66V216H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-32.34A96.12 96.12 0 0 0 224 88M58.7 48h138.6a79.5 79.5 0 0 1 10.3 32H48.4a79.5 79.5 0 0 1 10.3-32M128 168a80.11 80.11 0 0 1-79.6-72h159.2a80.11 80.11 0 0 1-79.6 72" />
      </G>
    </Svg>
  );
};