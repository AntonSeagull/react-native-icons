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

export const PiCarProfileThin = (props: IconProps) => {
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
        <Path d="M240 116h-30.34l-44.49-44.48a11.9 11.9 0 0 0-8.48-3.52H44.28a12 12 0 0 0-10 5.34L4.67 117.78A4 4 0 0 0 4 120v48a12 12 0 0 0 12 12h20.29a28 28 0 0 0 55.42 0h72.58a28 28 0 0 0 55.42 0H240a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12M41 77.78A4 4 0 0 1 44.28 76h112.41a4 4 0 0 1 2.82 1.17L198.34 116H15.47ZM64 196a20 20 0 1 1 20-20 20 20 0 0 1-20 20m128 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20m52-28a4 4 0 0 1-4 4h-20.29a28 28 0 0 0-55.42 0H91.71a28 28 0 0 0-55.42 0H16a4 4 0 0 1-4-4v-44h228a4 4 0 0 1 4 4Z" />
      </G>
    </Svg>
  );
};