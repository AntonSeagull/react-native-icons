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

export const RiAncientGateFill = (props: IconProps) => {
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
        <Path d="M6.964 3h10.072a3.5 3.5 0 0 0 4.445 2.86A3.5 3.5 0 0 1 18 9H6a3.5 3.5 0 0 1-3.481-3.14A3.5 3.5 0 0 0 6.964 3m16.015 8.111a2.999 2.999 0 0 1-4.077-1.11H5.098a3 3 0 0 1-4.078 1.11A3.5 3.5 0 0 0 3 14.663V21h6v-2a3 3 0 0 1 6 0v2h6v-6.336a3.5 3.5 0 0 0 1.979-3.553" />
      </G>
    </Svg>
  );
};