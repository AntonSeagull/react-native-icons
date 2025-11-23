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

export const WiMoonAltWaningCrescent2 = (props: IconProps) => {
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
        <Path d="M3.74 14.44c0-1.52.3-2.98.89-4.37s1.4-2.58 2.4-3.59 2.2-1.81 3.59-2.4 2.84-.89 4.37-.89 2.98.3 4.37.89 2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.59.89 2.84.89 4.37-.3 2.98-.89 4.37-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.37.89-2.98-.3-4.37-.89-2.58-1.4-3.59-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37m1.2 0c0 1.36.26 2.65.79 3.89s1.24 2.3 2.12 3.2 1.95 1.62 3.17 2.15 2.52.81 3.87.82c-1.16-2.47-1.74-5.83-1.74-10.06q0-5.415 1.8-10.05c-1.36 0-2.65.27-3.89.81s-2.3 1.25-3.19 2.15-1.61 1.97-2.14 3.2-.79 2.54-.79 3.89" />
      </G>
    </Svg>
  );
};