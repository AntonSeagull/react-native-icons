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

export const PiGpsSlashLight = (props: IconProps) => {
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
        <Path d="M246 128a6 6 0 0 1-6 6h-26.21a85.2 85.2 0 0 1-7.3 29.2 6 6 0 0 1-5.48 3.55 5.9 5.9 0 0 1-2.45-.53 6 6 0 0 1-3-7.93 74.05 74.05 0 0 0-91.28-100.4 6 6 0 0 1-3.84-11.37 85.6 85.6 0 0 1 21.56-4.3V16a6 6 0 0 1 12 0v26.23A86.12 86.12 0 0 1 213.77 122H240a6 6 0 0 1 6 6m-33.56 84a6 6 0 0 1-8.88 8.08l-22.3-24.54A85.73 85.73 0 0 1 134 213.77V240a6 6 0 0 1-12 0v-26.23A86.12 86.12 0 0 1 42.23 134H16a6 6 0 0 1 0-12h26.22a86.23 86.23 0 0 1 23.64-53.44L43.56 44a6 6 0 0 1 8.88-8Zm-39.27-25.4L74 77.48a74 74 0 0 0 99.17 109.12" />
      </G>
    </Svg>
  );
};