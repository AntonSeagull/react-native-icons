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

export const GrDocumentUser = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="none" stroke="#000" strokeWidth={2} d="M4.998 9V1H19.5L23 4.5V23h-7m2-22v5h5M8 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 23v-1c0-4 3-5 5-5s5 1 5 5v1z" />
      </G>
    </Svg>
  );
};