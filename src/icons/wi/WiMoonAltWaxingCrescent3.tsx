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

export const WiMoonAltWaxingCrescent3 = (props: IconProps) => {
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
        <Path d="M3.74 14.44c0-1.52.3-2.98.89-4.37s1.4-2.58 2.4-3.59 2.2-1.81 3.59-2.4 2.84-.89 4.37-.89 2.98.3 4.37.89 2.59 1.4 3.6 2.4 1.81 2.2 2.4 3.59.89 2.84.89 4.37-.3 2.98-.89 4.37-1.4 2.59-2.4 3.6-2.2 1.81-3.6 2.4-2.85.89-4.37.89-2.98-.3-4.37-.89-2.58-1.4-3.59-2.4-1.81-2.2-2.4-3.6-.89-2.84-.89-4.37M15.58 4.41c1.28 1.1 2.32 2.51 3.13 4.22s1.22 3.65 1.22 5.82c0 4.64-1.39 7.99-4.16 10.05 1.28-.1 2.49-.43 3.63-1s2.13-1.29 2.96-2.18 1.49-1.93 1.97-3.13.73-2.44.73-3.74q0-2.625-1.26-4.89c-1.26-2.265-1.99-2.72-3.44-3.64s-3.05-1.42-4.78-1.51" />
      </G>
    </Svg>
  );
};