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

export const PiSubtractDuotone = (props: IconProps) => {
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
        <Path d="M232 160a72 72 0 0 1-143.6 7.6 73 73 0 0 0 7.6.4 72 72 0 0 0 72-72 73 73 0 0 0-.4-7.6A72 72 0 0 1 232 160" opacity={0.2} />
        <Path d="M174.63 81.35a80 80 0 1 0-93.28 93.28 80 80 0 1 0 93.28-93.28M32 96a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64m128 128a63.81 63.81 0 0 1-62-48 80.07 80.07 0 0 0 78-78 64 64 0 0 1-16 126" />
      </G>
    </Svg>
  );
};