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

export const PiCrosshairSimpleDuotone = (props: IconProps) => {
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
        <Path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96" opacity={0.2} />
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m8 191.63V184a8 8 0 0 0-16 0v31.63A88.13 88.13 0 0 1 40.37 136H72a8 8 0 0 0 0-16H40.37A88.13 88.13 0 0 1 120 40.37V72a8 8 0 0 0 16 0V40.37A88.13 88.13 0 0 1 215.63 120H184a8 8 0 0 0 0 16h31.63A88.13 88.13 0 0 1 136 215.63" />
      </G>
    </Svg>
  );
};