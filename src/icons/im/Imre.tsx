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

export const Imre = (props: IconProps) => {
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
        <Path d="M4 10s.919-3 6-3v3l6-4-6-4v3c-4 0-6 2.495-6 5m7 2H2V6h1.967q.237-.28.508-.534A6.9 6.9 0 0 1 6.914 4H0v10h13V9.803l-2 1.333z" />
      </G>
    </Svg>
  );
};