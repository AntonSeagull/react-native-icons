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

export const PiEar = (props: IconProps) => {
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
        <Path d="M216 104a8 8 0 0 1-16 0 72 72 0 0 0-144 0c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a88 88 0 0 1 176 0m-38.13 57.08a8 8 0 0 0-10.94 2.92 8 8 0 0 1-14.93-4c0-9.33 4.82-15.76 10.4-23.2 6.37-8.5 13.6-18.13 13.6-32.8a48 48 0 0 0-96 0 8 8 0 0 0 16 0 32 32 0 0 1 64 0c0 9.33-4.82 15.76-10.4 23.2-6.37 8.5-13.6 18.13-13.6 32.8a24 24 0 0 0 44.78 12 8 8 0 0 0-2.91-10.92" />
      </G>
    </Svg>
  );
};