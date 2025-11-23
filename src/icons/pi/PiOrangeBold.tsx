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

export const PiOrangeBold = (props: IconProps) => {
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
        <Path d="M174 72.36A68 68 0 0 0 204 16a12 12 0 0 0-12-12h-8a68 68 0 0 0-56 29.49A68 68 0 0 0 72 4h-8a12 12 0 0 0 0 24h8a44.07 44.07 0 0 1 42.6 33A92.05 92.05 0 1 0 174 72.36m4.22-44a44.14 44.14 0 0 1-36.46 31.24 44.14 44.14 0 0 1 36.47-31.22ZM128 220a68 68 0 1 1 68-68 68.07 68.07 0 0 1-68 68m49.62-52.4a52 52 0 0 1-34 34 12.2 12.2 0 0 1-3.6.55 12 12 0 0 1-3.6-23.45 28 28 0 0 0 18.32-18.32 12 12 0 0 1 22.9 7.2Z" />
      </G>
    </Svg>
  );
};