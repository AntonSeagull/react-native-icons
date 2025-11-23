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

export const PiMapPinLineThin = (props: IconProps) => {
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
        <Path d="M200 228h-60.28A263.7 263.7 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84 84 0 0 0-168 0c0 30.42 14.17 62.79 41 93.62A263.7 263.7 0 0 0 116.28 228H56a4 4 0 0 0 0 8h144a4 4 0 0 0 0-8M90.9 192.23C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.77M164 104a36 36 0 1 0-36 36 36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28 28 28 0 0 1-28-28" />
      </G>
    </Svg>
  );
};