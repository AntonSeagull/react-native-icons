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

export const PiAirplaneTaxiingThin = (props: IconProps) => {
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
        <Path d="M208 100h-62.34L98.83 53.17A4 4 0 0 0 96 52h-8a12 12 0 0 0-11.37 15.79L87.36 100h-29.7L34.83 77.17A4 4 0 0 0 32 76h-8a12 12 0 0 0-11.48 15.45l14.06 46.89A35.79 35.79 0 0 0 61.06 164H240a4 4 0 0 0 4-4v-24a36 36 0 0 0-36-36m28 56H61.06a27.83 27.83 0 0 1-26.81-19.95l-14.07-46.9A4 4 0 0 1 24 84h6.34l22.83 22.83A4 4 0 0 0 56 108h36.91a4 4 0 0 0 3.79-5.26L84.21 65.26A4 4 0 0 1 88 60h6.34l46.82 46.83A4 4 0 0 0 144 108h64a28 28 0 0 1 28 28Zm-16 44a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-96 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};