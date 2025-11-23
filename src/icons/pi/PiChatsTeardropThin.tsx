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

export const PiChatsTeardropThin = (props: IconProps) => {
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
        <Path d="M166.76 76.32A76 76 0 0 0 20 104v64a12 12 0 0 0 12 12h57.33A76.13 76.13 0 0 0 160 228h64a12 12 0 0 0 12-12v-64a76 76 0 0 0-69.24-75.68M28 168v-64a68 68 0 1 1 68 68H32a4 4 0 0 1-4-4m200 48a4 4 0 0 1-4 4h-64a68.16 68.16 0 0 1-62-40 76 76 0 0 0 71.5-95.33A68 68 0 0 1 228 152Z" />
      </G>
    </Svg>
  );
};