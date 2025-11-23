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

export const PiBroadcastFill = (props: IconProps) => {
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
        <Path d="M168 128a40 40 0 1 1-40-40 40 40 0 0 1 40 40m40 0a79.74 79.74 0 0 0-20.37-53.33 8 8 0 1 0-11.92 10.67 64 64 0 0 1 0 85.33 8 8 0 0 0 11.92 10.67A79.8 79.8 0 0 0 208 128M80.29 85.34a8 8 0 1 0-11.92-10.67 79.94 79.94 0 0 0 0 106.67 8 8 0 0 0 11.92-10.67 63.95 63.95 0 0 1 0-85.33m158.28-4A119.5 119.5 0 0 0 213.71 44a8 8 0 1 0-11.42 11.2 103.9 103.9 0 0 1 0 145.56A8 8 0 1 0 213.71 212a120.12 120.12 0 0 0 24.86-130.71Zm-206.4 87.14A103.9 103.9 0 0 1 53.71 55.22 8 8 0 1 0 42.29 44a119.87 119.87 0 0 0 0 168 8 8 0 1 0 11.42-11.2 103.6 103.6 0 0 1-21.54-32.32" />
      </G>
    </Svg>
  );
};