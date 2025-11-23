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

export const CiCoffeeBean = (props: IconProps) => {
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
        <Path d="M19.151 4.868a6.74 6.74 0 0 0-5.96-1.69 12 12 0 0 0-6.54 3.47 12 12 0 0 0-3.48 6.55 6.74 6.74 0 0 0 1.69 5.95 6.4 6.4 0 0 0 4.63 1.78 11.5 11.5 0 0 0 7.87-3.56c3.939-3.94 4.739-9.55 1.79-12.5m-14.99 8.48a11.04 11.04 0 0 1 3.19-5.99 10.98 10.98 0 0 1 5.99-3.19 8 8 0 0 1 1.18-.09 5.41 5.41 0 0 1 3.92 1.49.7.7 0 0 1 .11.13 6.5 6.5 0 0 1-2.12 1.23 7.7 7.7 0 0 0-2.96 1.93 7.7 7.7 0 0 0-1.93 2.96 6.6 6.6 0 0 1-1.71 2.63 6.7 6.7 0 0 1-2.63 1.71 7.5 7.5 0 0 0-2.35 1.36 6.18 6.18 0 0 1-.69-4.17m12.49 3.31c-3.55 3.55-8.52 4.35-11.08 1.79a2 2 0 0 1-.12-.13 6.7 6.7 0 0 1 2.13-1.23 7.9 7.9 0 0 0 2.96-1.93 7.74 7.74 0 0 0 1.93-2.96 6.6 6.6 0 0 1 1.71-2.63 6.6 6.6 0 0 1 2.63-1.71 7.6 7.6 0 0 0 2.34-1.37c1.64 2.712.67 7-2.5 10.17" data-name="Coffee Bean" />
      </G>
    </Svg>
  );
};