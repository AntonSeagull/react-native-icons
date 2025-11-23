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

export const GrTestDesktop = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8zm0 22h8v-4H8z" />
      </G>
    </Svg>
  );
};