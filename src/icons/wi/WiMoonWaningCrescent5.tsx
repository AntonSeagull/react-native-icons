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

export const WiMoonWaningCrescent5 = (props: IconProps) => {
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
        <Path d="M3.74 14.44c0 2.04.5 3.93 1.51 5.65s2.37 3.1 4.09 4.1 3.61 1.51 5.65 1.51c-2.59-.79-4.48-2.13-5.69-4.02s-1.81-4.3-1.81-7.24c0-1.39.2-2.7.6-3.95s.94-2.34 1.63-3.27 1.48-1.75 2.37-2.44 1.86-1.22 2.89-1.59c-2.04 0-3.92.5-5.65 1.51S6.26 7.07 5.25 8.8s-1.51 3.6-1.51 5.64" />
      </G>
    </Svg>
  );
};