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

export const Imndcloud2 = (props: IconProps) => {
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
        <Path d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M2.75 11h-.5L2 9.5 2.25 8h.5L3 9.5zm2 0h-.5L4 9l.25-2h.5L5 9zm2 0h-.5L6 8l.25-3h.5L7 8zm6.144 0-4.709-.003a.21.21 0 0 1-.184-.2V5.403c0-.1.034-.15.162-.2a3 3 0 0 1 4.075 2.531 1.701 1.701 0 0 1 2.356 1.569c0 .938-.762 1.697-1.7 1.697" />
      </G>
    </Svg>
  );
};