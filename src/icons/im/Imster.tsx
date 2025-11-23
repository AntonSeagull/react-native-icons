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

export const Imster = (props: IconProps) => {
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
        <Path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13M4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
        <Path d="M10.561 8.439a1.5 1.5 0 1 0-2.063 2.176c1.352 1.227 4.503-.029 4.503-1.615-.969.625-1.726.153-2.439-.561z" />
        <Path d="M5.439 8.439a1.5 1.5 0 1 1 2.063 2.176C6.15 11.842 2.999 10.586 2.999 9c.969.625 1.726.153 2.439-.561z" />
      </G>
    </Svg>
  );
};