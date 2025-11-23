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

export const FcNook = (props: IconProps) => {
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
        <Path fill="#90A4AE" d="M8 39V9c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v30c0 3.3-2.7 6-6 6H14c-3.3 0-6-2.7-6-6" />
        <Path fill="#ECEFF1" d="M34 7H14c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2" />
        <Path d="M16 12h16v3H16zM16 19h16v2H16zM16 23h12v2H16zM16 27h16v2H16zM16 31h12v2H16z" />
        <Path fill="none" stroke="#eee" strokeMiterlimit={10} strokeWidth={2} d="M22 43v-1c0-1.1.9-2 2-2s2 .9 2 2v1" />
      </G>
    </Svg>
  );
};