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

export const PiSphereFill = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 16c8.15 0 24 31.06 24 88 0 8.24-.34 15.92-.93 23.07-7.15.59-14.83.93-23.07.93-56.94 0-88-15.85-88-24a88.1 88.1 0 0 1 88-88M43.4 152.26C63.28 162.65 95.76 168 128 168c7.09 0 14.19-.26 21.17-.77C144.23 199 134 216 128 216a88.17 88.17 0 0 1-84.6-63.74" />
      </G>
    </Svg>
  );
};