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

export const PiWheelchairMotionLight = (props: IconProps) => {
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
        <Path d="M176 78a30 30 0 1 0-30-30 30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18m-10 138a62 62 0 1 1-62-62 6 6 0 0 1 0 12 50 50 0 1 0 50 50 6 6 0 0 1 12 0m38.64-35.8a6 6 0 0 1 1.24 5l-16 80A6 6 0 0 1 184 222a6 6 0 0 1-1.19-.12 6 6 0 0 1-4.7-7.06L192.68 142H128a6 6 0 0 1-5.2-9l21.07-36.68a82.05 82.05 0 0 0-92.05 8.41 6 6 0 1 1-7.64-9.25 94 94 0 0 1 111.1-6.28 6 6 0 0 1 1.92 8L138.37 130H200a6 6 0 0 1 4.64 2.2" />
      </G>
    </Svg>
  );
};