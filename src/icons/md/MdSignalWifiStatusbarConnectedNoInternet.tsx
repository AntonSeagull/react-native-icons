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

export const MdSignalWifiStatusbarConnectedNoInternet = (props: IconProps) => {
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
        <Path d="M19 18h2v2h-2zM19 10h2v6h-2z" />
        <Path d="M17 8h5.92C19.97 5.51 16.16 4 12 4 7.31 4 3.07 5.9 0 8.98L12 21l5-5.01z" opacity={0.3} />
      </G>
    </Svg>
  );
};