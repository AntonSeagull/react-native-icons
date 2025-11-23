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

export const PiPenNibStraightDuotone = (props: IconProps) => {
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
        <Path d="M215.17 127.43 184 72H72l-31.17 55.43a8 8 0 0 0 .73 8.29L128 248l86.43-112.28a8 8 0 0 0 .74-8.29M128 152a20 20 0 1 1 20-20 20 20 0 0 1-20 20" opacity={0.2} />
        <Path d="M222.33 123.89c-.06-.13-.12-.26-.19-.38L192 69.9V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v37.92l-30.14 53.59c-.07.12-.13.25-.2.38a15.94 15.94 0 0 0 1.46 16.57l.11.14 86.44 112.28a8 8 0 0 0 12.67 0l86.43-112.28.11-.14a15.92 15.92 0 0 0 1.45-16.57M176 32v32H80V32Zm-48 112a12 12 0 1 1 12-12 12 12 0 0 1-12 12m8 80.5v-65.67a28 28 0 1 0-16 0v65.66L48 131l28.69-51h102.63L208 131Z" />
      </G>
    </Svg>
  );
};