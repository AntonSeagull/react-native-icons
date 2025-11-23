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

export const PiPepperThin = (props: IconProps) => {
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
        <Path d="M163.79 44.14A36.06 36.06 0 0 0 128 12a4 4 0 0 0 0 8 28 28 0 0 1 27.73 24.17A60.07 60.07 0 0 0 100 104c0 48.75-26.71 81.34-79.4 96.87a12 12 0 0 0 1.33 23.36A260.4 260.4 0 0 0 66.69 228a256.5 256.5 0 0 0 34.83-2.3c33.23-4.59 60.2-15.41 80.19-32.18C207.12 172.21 220 142.09 220 104a60.07 60.07 0 0 0-56.21-59.86M160 52a52.08 52.08 0 0 1 50.19 38.44L192 99.54l-30.21-15.11a4 4 0 0 0-3.58 0L128 99.54l-18.19-9.1A52.08 52.08 0 0 1 160 52m16.57 135.39c-25.47 21.37-80.88 41.77-153.24 29a4 4 0 0 1-.47-7.81C78.56 192.14 108 156 108 104a53 53 0 0 1 .28-5.39l17.93 9a4 4 0 0 0 3.58 0L160 92.48l30.21 15.11a4 4 0 0 0 3.58 0l17.93-9A53 53 0 0 1 212 104c0 35.62-11.92 63.67-35.43 83.39" />
      </G>
    </Svg>
  );
};