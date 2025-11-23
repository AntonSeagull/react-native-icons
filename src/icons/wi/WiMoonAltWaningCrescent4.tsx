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

export const WiMoonAltWaningCrescent4 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3.74 14.44c0-1.52.3-2.98.89-4.37s1.4-2.58 2.4-3.59 2.2-1.81 3.59-2.4 2.84-.89 4.37-.89 2.98.3 4.37.89 2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.59.89 2.84.89 4.37-.3 2.98-.89 4.37-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.37.89-2.98-.3-4.37-.89-2.58-1.4-3.59-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37m1.2 0q0 1.995.75 3.81c.75 1.815 1.18 2.26 2.03 3.15s1.87 1.61 3.05 2.17 2.43.87 3.74.94c-1.24-1.19-2.11-2.63-2.61-4.31s-.75-3.6-.75-5.76c0-1.93.31-3.78.92-5.54s1.47-3.26 2.56-4.5c-1.77.07-3.39.56-4.88 1.47S7.09 8 6.23 9.51s-1.29 3.17-1.29 4.93" />
      </G>
    </Svg>
  );
};