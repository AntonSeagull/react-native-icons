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

export const PiHairDryerDuotone = (props: IconProps) => {
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
        <Path d="M168 32 30.68 54.89A8 8 0 0 0 24 62.78v50.44a8 8 0 0 0 6.68 7.89L168 144a56 56 0 0 0 0-112m0 80a24 24 0 1 1 24-24 24 24 0 0 1-24 24" opacity={0.2} />
        <Path d="M200 88a32 32 0 1 0-32 32 32 32 0 0 0 32-32m-32 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16m9.42 102.62L209 137.07A64 64 0 0 0 168 24a8.4 8.4 0 0 0-1.32.11L29.37 47A16 16 0 0 0 16 62.78v50.44A16 16 0 0 0 29.37 129L128 145.44V200a16 16 0 0 0 16 16 40 40 0 0 0 40 40h16a8 8 0 0 0 0-16h-16a24 24 0 0 1-24-24h2.85a16 16 0 0 0 14.57-9.38M32 62.78 168.64 40a48 48 0 0 1 0 96L32 113.23Zm134.68 89.11a8.4 8.4 0 0 0 1.32.11 63.9 63.9 0 0 0 17.82-2.54l-23 50.54H144v-51.89Z" />
      </G>
    </Svg>
  );
};