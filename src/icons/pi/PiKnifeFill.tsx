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

export const PiKnifeFill = (props: IconProps) => {
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
        <Path d="M236 49a25 25 0 0 0-42.63-17.66l-50.21 50.2L18.34 206.4a8 8 0 0 0 3.86 13.45A160.7 160.7 0 0 0 58.4 224c32.95 0 65.91-10.2 96.94-30.23 31.76-20.5 50.19-43.82 51-44.8a8 8 0 0 0-.64-10.59L181.31 114l47.38-47.39A24.84 24.84 0 0 0 236 49m-89.77 131.6c-34.43 22.1-69.94 30.92-105.76 26.3L146 101.34l43.09 43.1a220 220 0 0 1-42.86 36.16" />
      </G>
    </Svg>
  );
};