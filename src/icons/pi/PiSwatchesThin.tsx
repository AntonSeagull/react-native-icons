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

export const PiSwatchesThin = (props: IconProps) => {
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
        <Path d="m235.27 152.07-19.08-52.22a12 12 0 0 0-15.34-7.13l-74.3 26.92 13.27-75.83a12 12 0 0 0-9.68-13.9l-54.67-9.72a11.75 11.75 0 0 0-8.89 2 11.9 11.9 0 0 0-4.94 7.77l-25 143.13a40 40 0 0 0 32.16 46.3 42.7 42.7 0 0 0 7.2.61h148a12 12 0 0 0 12-12v-51.81a14 14 0 0 0-.73-4.12m-31.7-51.83a4 4 0 0 1 5.1 2.36l19.09 52.21a3.9 3.9 0 0 1-.13 3 3.94 3.94 0 0 1-2.24 2l-116.61 42.3a40 40 0 0 0 6-15.17L125 128.73ZM93.75 206.29a31.25 31.25 0 0 1-23.55 5.22 32 32 0 0 1-25.71-37.08l25-143.13a4 4 0 0 1 1.64-2.59 3.85 3.85 0 0 1 2.25-.71 4 4 0 0 1 .69.06l54.67 9.73a4 4 0 0 1 3.2 4.64l-25 143.13a31.8 31.8 0 0 1-13.19 20.73M228 208a4 4 0 0 1-4 4H105l123-44.59ZM84 180a8 8 0 1 1-8-8 8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};