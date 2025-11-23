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

export const PiAngularLogoThin = (props: IconProps) => {
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
        <Path d="m225.54 68.31-96-40a4 4 0 0 0-3.08 0l-96 40A4 4 0 0 0 28 72.53l16 120a4 4 0 0 0 2.17 3.05l80 40a4 4 0 0 0 3.58 0l80-40a4 4 0 0 0 2.17-3.05l16-120a4 4 0 0 0-2.38-4.22m-21.22 121.06L128 227.53l-76.32-38.16L36.37 74.51 128 36.33l91.63 38.18ZM124.5 86.06l-40 72a4 4 0 1 0 7 3.88L103.69 140h48.62l12.19 21.94a4 4 0 1 0 7-3.88l-40-72a4 4 0 0 0-7 0M147.87 132h-39.74L128 96.24Z" />
      </G>
    </Svg>
  );
};