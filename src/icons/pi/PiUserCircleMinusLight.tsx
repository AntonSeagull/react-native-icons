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

export const PiUserCircleMinusLight = (props: IconProps) => {
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
        <Path d="M170 56a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6m54.19 38A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.7 91.7 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64 77.53 77.53 0 0 1 40-31.38 46 46 0 1 1 51 0 77.53 77.53 0 0 1 40 31.38A90 90 0 0 0 212.88 98a6 6 0 1 1 11.31-4M128 154a34 34 0 1 0-34-34 34 34 0 0 0 34 34m0 64a89.58 89.58 0 0 0 56.56-20 66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218" />
      </G>
    </Svg>
  );
};