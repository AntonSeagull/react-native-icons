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

export const SiCachet = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.746.254C5.265.254 0 5.519 0 12s5.265 11.746 11.746 11.746S23.492 18.481 23.492 12c0-1.44-.26-2.82-.734-4.097l-.264-.709-1.118 1.118.1.288c.373 1.064.575 2.207.575 3.4a10.297 10.297 0 0 1-10.305 10.305A10.297 10.297 0 0 1 1.441 12 10.297 10.297 0 0 1 11.746 1.695c1.817 0 3.52.47 5.002 1.293l.32.178 1.054-1.053-.553-.316A11.7 11.7 0 0 0 11.746.254M22.97.841 9.05 14.761 5.328 11.04l-1.031 1.03 4.752 4.753L24 1.872z" />
      </G>
    </Svg>
  );
};