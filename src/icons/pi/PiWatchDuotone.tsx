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

export const PiWatchDuotone = (props: IconProps) => {
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
        <Path d="M200 128a72 72 0 1 1-72-72 72 72 0 0 1 72 72" opacity={0.2} />
        <Path d="M208 128a79.94 79.94 0 0 0-32.7-64.47l-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38A79.94 79.94 0 0 0 208 128M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0ZM64 128a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64m89.32 96h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM120 128V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8" />
      </G>
    </Svg>
  );
};