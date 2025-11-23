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

export const ImMinus = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10 2h6v2h-6z" />
        <Path d="M13.599 5H9V3.056A9 9 0 0 0 8 3C4.511 3 1.486 5.032 0 8c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5a9.2 9.2 0 0 0-2.401-3M6.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 5m5.444 5.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.72 8a7.6 7.6 0 0 1 2.52-2.462 4 4 0 1 0 7.518 0q.093.056.185.114c.94.6 1.737 1.403 2.335 2.348a7.6 7.6 0 0 1-2.335 2.348z" />
      </G>
    </Svg>
  );
};