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

export const TfiInkPen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 0v6.499l5.466 9.499L14 6.5V0zm5.471 14h.002l-.001.002zM8.5 6a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2m4.5.23-4 6.866V6.929c.86-.223 1.5-1 1.5-1.929 0-1.103-.897-2-2-2s-2 .897-2 2c0 .929.64 1.706 1.5 1.929v6.254L4 6.231V1h9z" />
      </G>
    </Svg>
  );
};