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

export const FcBiomass = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#9CCC65" d="M32 15V7H16v8L6.2 40c-.6 1.5.5 3 2.1 3h31.5c1.6 0 2.6-1.6 2.1-3z" />
        <Path fill="#8BC34A" d="M32 9H16c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2" />
        <Path fill="#2E7D32" d="M28 30c0 4.4-4 8-4 8s-4-3.6-4-8 4-8 4-8 4 3.6 4 8" />
        <Path fill="#388E3C" d="M31.1 32.6c-2 4-7.1 5.4-7.1 5.4s-2-5 0-8.9 7.1-5.4 7.1-5.4 2 4.9 0 8.9" />
        <Path fill="#43A047" d="M16.9 32.6c2 4 7.1 5.4 7.1 5.4s2-5 0-8.9-7.1-5.4-7.1-5.4-2 4.9 0 8.9" />
      </G>
    </Svg>
  );
};