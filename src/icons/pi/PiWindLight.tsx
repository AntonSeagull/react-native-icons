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

export const PiWindLight = (props: IconProps) => {
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
        <Path d="M182 184a30 30 0 0 1-30 30c-12.9 0-25.36-8.38-29.63-19.92a6 6 0 0 1 11.26-4.16C136.13 196.69 144.2 202 152 202a18 18 0 0 0 0-36H40a6 6 0 0 1 0-12h112a30 30 0 0 1 30 30M150 72a30 30 0 0 0-30-30c-12.9 0-25.36 8.38-29.63 19.92a6 6 0 1 0 11.26 4.16C104.13 59.31 112.2 54 120 54a18 18 0 0 1 0 36H24a6 6 0 0 0 0 12h96a30 30 0 0 0 30-30m58 2c-12.9 0-25.36 8.38-29.63 19.92a6 6 0 1 0 11.26 4.16C192.13 91.31 200.2 86 208 86a18 18 0 0 1 0 36H32a6 6 0 0 0 0 12h176a30 30 0 0 0 0-60" />
      </G>
    </Svg>
  );
};