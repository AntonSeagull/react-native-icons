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

export const TfiLayoutGrid3Alt = (props: IconProps) => {
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
        <Path d="M0 0h5v5H0zm6 5h5V0H6zm6-5v5h5V0zM0 11h5V6H0zm6 0h5V6H6zm6 0h5V6h-5zM0 17h5v-5H0zm6 0h5v-5H6zm6 0h5v-5h-5z" />
      </G>
    </Svg>
  );
};