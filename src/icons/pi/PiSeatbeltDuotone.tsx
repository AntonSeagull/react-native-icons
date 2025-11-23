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

export const PiSeatbeltDuotone = (props: IconProps) => {
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
        <Path d="M92 68a36 36 0 1 1 36 36 36 36 0 0 1-36-36m36 52a72 72 0 0 0-72 72v32h144v-32a72 72 0 0 0-72-72" opacity={0.2} />
        <Path d="M172 68a44 44 0 1 0-44 44 44.05 44.05 0 0 0 44-44m-44 28a28 28 0 1 1 28-28 28 28 0 0 1-28 28m80 128a8 8 0 0 1-8 8H56a8 8 0 0 1-5.29-14l98.07-86.54a64 64 0 0 0-84 50.33A8 8 0 0 1 49 179.25a80 80 0 0 1 113.16-59.59L186.71 98a8 8 0 0 1 10.58 12L77.16 216H200a8 8 0 0 1 8 8m-14.27-77.62A79.6 79.6 0 0 1 208 192a8 8 0 0 1-16 0 63.67 63.67 0 0 0-11.41-36.49 8 8 0 0 1 13.14-9.13" />
      </G>
    </Svg>
  );
};