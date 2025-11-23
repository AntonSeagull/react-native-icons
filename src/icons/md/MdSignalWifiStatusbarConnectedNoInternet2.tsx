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

export const MdSignalWifiStatusbarConnectedNoInternet2 = (props: IconProps) => {
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
        <Path fillOpacity={0.3} d="M17 11.21V8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98l4.23 4.24A10.96 10.96 0 0 1 17 11.21" />
        <Path d="M4.23 13.22 12 21l5-5.01v-4.78a10.96 10.96 0 0 0-12.77 2.01M19 18h2v2h-2zM19 10h2v6h-2z" />
      </G>
    </Svg>
  );
};