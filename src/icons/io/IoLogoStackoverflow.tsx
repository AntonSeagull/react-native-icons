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

export const IoLogoStackoverflow = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M392 440V320h40v160H64V320h40v120Z" />
        <Path d="m149.1 308.77 198.57 40.87 8.4-39.32-198.57-40.87Zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84Zm50.95-89 156 127.78 25.74-30.52-156-127.78ZM328 32l-33.39 23.8 120.82 160.37L448 192ZM144 400h204v-40H144Z" />
      </G>
    </Svg>
  );
};