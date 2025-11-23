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

export const PiGpsSlashDuotone = (props: IconProps) => {
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
        <Path d="M208 128a80 80 0 1 1-80-80 80 80 0 0 1 80 80" opacity={0.2} />
        <Path d="M248 128a8 8 0 0 1-8 8h-24.36a87 87 0 0 1-7.33 28 8 8 0 0 1-7.3 4.73 7.9 7.9 0 0 1-3.27-.71 8 8 0 0 1-4-10.57 72.06 72.06 0 0 0-88.81-97.69 8 8 0 1 1-5.13-15.15 87.2 87.2 0 0 1 20.2-4.24V16a8 8 0 0 1 16 0v24.37A88.13 88.13 0 0 1 215.63 120H240a8 8 0 0 1 8 8m-34.08 82.62a8 8 0 1 1-11.84 10.76L181 198.23a87.7 87.7 0 0 1-45 17.4V240a8 8 0 0 1-16 0v-24.37A88.13 88.13 0 0 1 40.37 136H16a8 8 0 0 1 0-16h24.37a88.3 88.3 0 0 1 22.77-51.46L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-43.72-24.3L74 80.45a72 72 0 0 0 96.2 105.87" />
      </G>
    </Svg>
  );
};