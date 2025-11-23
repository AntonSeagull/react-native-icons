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

export const PiChampagneLight = (props: IconProps) => {
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
        <Path d="M142.26 10H97.65A6 6 0 0 0 92 14.14c-1.47 4.51-35.53 110.73-5.85 151.57 6.75 9.28 16.1 14.62 27.86 15.95V234H96a6 6 0 1 0 0 12h48a6 6 0 1 0 0-12h-18v-52.34c11.76-1.33 21.11-6.67 27.85-15.95 29.68-40.84-4.37-147.06-5.84-151.57a6 6 0 0 0-5.75-4.14m-40.18 12h35.75c2.24 7.48 7 24.29 10.75 44H91.34c3.75-19.71 8.51-36.52 10.74-44m42 136.66C138.55 166.29 130.66 170 120 170s-18.6-3.71-24.14-11.34c-10.4-14.24-12.65-42.11-6.61-80.66h61.42c6.04 38.55 3.78 66.42-6.57 80.66ZM230 52a10 10 0 1 1-10-10 10 10 0 0 1 10 10m-24-32a10 10 0 1 1-10-10 10 10 0 0 1 10 10m0 80a10 10 0 1 1-10-10 10 10 0 0 1 10 10" />
      </G>
    </Svg>
  );
};