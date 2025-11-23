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

export const PiTennisBallLight = (props: IconProps) => {
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
        <Path d="M200.16 55.88a102 102 0 1 0 0 144.24 101.4 101.4 0 0 0 0-144.24M64.33 64.36a89.62 89.62 0 0 1 57.25-26.07 89.32 89.32 0 0 1-26.12 57.18 89.38 89.38 0 0 1-57.21 26.11 89.6 89.6 0 0 1 26.08-57.22M38.2 133.63A101.36 101.36 0 0 0 104 104a101.24 101.24 0 0 0 29.68-65.72 89.76 89.76 0 0 1 84.17 84.13 102 102 0 0 0-95.43 95.39 89.76 89.76 0 0 1-84.22-84.17m153.47 58a89.63 89.63 0 0 1-57.25 26.06 89.94 89.94 0 0 1 83.33-83.28 89.6 89.6 0 0 1-26.08 57.23Z" />
      </G>
    </Svg>
  );
};