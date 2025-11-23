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

export const PiPenNibStraightFill = (props: IconProps) => {
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
        <Path d="M222.33 123.89c-.06-.13-.12-.26-.19-.38L192 69.91V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v37.9l-30.14 53.61c-.07.12-.13.25-.2.38a15.94 15.94 0 0 0 1.46 16.57l.11.14 77.61 100.81A4 4 0 0 0 120 239v-84.37a24 24 0 1 1 16 0V239a4 4 0 0 0 7.16 2.44l77.6-100.81.11-.14a15.92 15.92 0 0 0 1.46-16.6M176 64H80V32h96Z" />
      </G>
    </Svg>
  );
};