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

export const PiAlienBold = (props: IconProps) => {
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
        <Path d="M128 12A100.11 100.11 0 0 0 28 112c0 24.86 12.86 56.8 34.41 85.44C70.63 208.36 99.64 244 128 244s57.37-35.64 65.59-46.56C215.14 168.8 228 136.86 228 112A100.11 100.11 0 0 0 128 12m46.41 171c-13.83 18.38-34.21 37-46.41 37s-32.58-18.61-46.41-37C63.34 158.75 52 131.54 52 112a76 76 0 0 1 152 0c0 19.54-11.34 46.75-29.59 71M104 148a36 36 0 0 1-36-36 12 12 0 0 1 12-12 36 36 0 0 1 36 36 12 12 0 0 1-12 12m84-36a36 36 0 0 1-36 36 12 12 0 0 1-12-12 36 36 0 0 1 36-36 12 12 0 0 1 12 12m-36 72a12 12 0 0 1-12 12h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};