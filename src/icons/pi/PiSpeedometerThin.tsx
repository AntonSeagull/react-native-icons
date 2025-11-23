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

export const PiSpeedometerThin = (props: IconProps) => {
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
        <Path d="m117.17 157.17 96-96a4 4 0 1 1 5.66 5.66l-96 96a4 4 0 0 1-5.66-5.66M128 84a68 68 0 0 1 21.72 3.54 4 4 0 1 0 2.55-7.54A76 76 0 0 0 52 152a79 79 0 0 0 .46 8.44 4 4 0 0 0 4 3.56h.45a4 4 0 0 0 3.54-4.42A68 68 0 0 1 128 84m96.17 18.82a4 4 0 1 0-7.11 3.64 100.34 100.34 0 0 1 5.26 78.84 4 4 0 0 1-3.79 2.7H37.46a4.07 4.07 0 0 1-3.8-2.74A100.05 100.05 0 0 1 173.54 62.94a4 4 0 1 0 3.64-7.12A107 107 0 0 0 129 44h-1A108.06 108.06 0 0 0 26.12 187.92 12.07 12.07 0 0 0 37.46 196h181.07a12 12 0 0 0 11.34-8 108.3 108.3 0 0 0-5.7-85.14Z" />
      </G>
    </Svg>
  );
};