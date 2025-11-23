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

export const Imessibility = (props: IconProps) => {
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
        <Path d="M6.5 1.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 1.5" />
        <Path d="m10 5 5.15-2.221-.371-.929L8.5 4h-1L1.221 1.85l-.371.929L6 5v4l-2.051 6.634.935.355L7.786 9.5h.429l2.902 6.489.935-.355L10.001 9z" />
      </G>
    </Svg>
  );
};