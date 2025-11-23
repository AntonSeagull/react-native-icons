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

export const Imu2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 22 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 11, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 3h14v3H0zm0 4h14v3H0zm0 4h14v3H0zM15.5 9l3 3 3-3zM21.5 8l-3-3-3 3z" />
      </G>
    </Svg>
  );
};