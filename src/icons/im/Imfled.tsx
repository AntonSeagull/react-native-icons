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

export const Imfled = (props: IconProps) => {
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
        <Path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13" />
        <Path d="M6 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        <Path d="M5.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 5m0-1C4.122 4 3 5.122 3 6.5S4.122 9 5.5 9 8 7.878 8 6.5 6.878 4 5.5 4M11 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        <Path d="M10.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 10.5 5m0-1C9.121 4 8 5.122 8 6.5S9.121 9 10.5 9 13 7.878 13 6.5 11.879 4 10.5 4M6 11h4v1H6z" />
      </G>
    </Svg>
  );
};