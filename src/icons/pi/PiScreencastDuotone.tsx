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

export const PiScreencastDuotone = (props: IconProps) => {
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
        <Path d="M224 56v144a8 8 0 0 1-8 8H48a16 16 0 0 0-16-16V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M232 56v144a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V56H40v40a8 8 0 0 1-16 0V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16M32 184a8 8 0 0 0 0 16 8 8 0 0 1 8 8 8 8 0 0 0 16 0 24 24 0 0 0-24-24m0-32a8 8 0 0 0 0 16 40 40 0 0 1 40 40 8 8 0 0 0 16 0 56.06 56.06 0 0 0-56-56m0-32a8 8 0 0 0 0 16 72.08 72.08 0 0 1 72 72 8 8 0 0 0 16 0 88.1 88.1 0 0 0-88-88" />
      </G>
    </Svg>
  );
};