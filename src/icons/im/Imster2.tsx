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

export const Imster2 = (props: IconProps) => {
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
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3.497 6.615A1.5 1.5 0 0 1 8 9.5a1.5 1.5 0 0 1-.497 1.115C6.151 11.842 3 10.586 3 9c.969.625 1.726.153 2.439-.561a1.5 1.5 0 0 1 2.56 1.06 1.5 1.5 0 0 1 2.56-1.06c.713.714 1.471 1.186 2.439.561 0 1.586-3.151 2.842-4.503 1.615z" />
      </G>
    </Svg>
  );
};