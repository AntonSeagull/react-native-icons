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

export const MdSignalWifiStatusbarConnectedNoInternet3 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillOpacity={0.3} d="M17 9V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l2.82 2.82A12.93 12.93 0 0 1 12 8c1.77 0 3.46.36 5 1" />
        <Path d="M2.82 11.8 12 21l5-5.01V9c-1.54-.64-3.23-1-5-1-3.59 0-6.83 1.45-9.18 3.8M19 18h2v2h-2zM19 10h2v6h-2z" />
      </G>
    </Svg>
  );
};