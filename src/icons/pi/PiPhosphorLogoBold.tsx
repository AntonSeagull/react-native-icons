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

export const PiPhosphorLogoBold = (props: IconProps) => {
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
        <Path d="M228 104a76.08 76.08 0 0 0-76-76H72a12 12 0 0 0-12 12v128a84.09 84.09 0 0 0 84 84 12 12 0 0 0 12-12v-60.11A76.09 76.09 0 0 0 228 104M84 85.81 123.48 156H84Zm48 36.38L92.52 52H132ZM85.22 180H132v46.79A60.18 60.18 0 0 1 85.22 180M156 155.83V52.17a52 52 0 0 1 0 103.66" />
      </G>
    </Svg>
  );
};