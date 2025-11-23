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

export const MdSignalWifiStatusbarConnectedNoInternet1 = (props: IconProps) => {
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
        <Path fillOpacity={0.3} d="M17 14.76V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l6.35 6.36A7.95 7.95 0 0 1 12 13c1.89 0 3.63.66 5 1.76" />
        <Path d="M6.35 15.34 12 21l5-5.01v-1.23A7.96 7.96 0 0 0 12 13c-2.21 0-4.2.89-5.65 2.34M19 18h2v2h-2zM19 10h2v6h-2z" />
      </G>
    </Svg>
  );
};