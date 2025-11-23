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

export const WiNa = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6.87 18.23h1.94v-3.64h.02l2.05 3.64h1.99v-6.66h-1.94v3.55h-.02l-1.94-3.55h-2.1zm6.52.15h1.43l2.61-6.97h-1.42zm2.87-.15h2.07l.29-.95h2.12l.28.95h2.13l-2.43-6.66h-2.01zm2.81-2.39.64-2.04h.03l.6 2.04z" />
      </G>
    </Svg>
  );
};