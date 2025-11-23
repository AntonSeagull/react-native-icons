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

export const PiSprayBottleThin = (props: IconProps) => {
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
        <Path d="M200 76a4 4 0 0 0 4-4 52.06 52.06 0 0 0-52-52H80a12 12 0 0 0-12 12v48a28 28 0 0 1-28 28 4 4 0 0 0 0 8 36 36 0 0 0 36-36v-4h40v28.62a27.85 27.85 0 0 1-10.51 21.86l-16 12.79A35.8 35.8 0 0 0 76 167.38V224a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-12.53A266.86 266.86 0 0 0 167.09 76ZM76 32a4 4 0 0 1 4-4h72a44.06 44.06 0 0 1 43.82 40H76Zm120 179.47V224a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4v-56.62a27.85 27.85 0 0 1 10.51-21.86l16-12.79A35.8 35.8 0 0 0 124 104.62V76h33.76A258.83 258.83 0 0 1 196 211.47" />
      </G>
    </Svg>
  );
};