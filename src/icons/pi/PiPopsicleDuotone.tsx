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

export const PiPopsicleDuotone = (props: IconProps) => {
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
        <Path d="M192 80v96a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8V80a64 64 0 0 1 64-64 64 64 0 0 1 64 64" opacity={0.2} />
        <Path d="M128 8a72.08 72.08 0 0 0-72 72v96a16 16 0 0 0 16 16h32v40a24 24 0 0 0 48 0v-40h32a16 16 0 0 0 16-16V80a72.08 72.08 0 0 0-72-72m8 224a8 8 0 0 1-16 0v-40h16Zm48-56H72V80a56 56 0 0 1 112 0zM120 72v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m32 0v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0" />
      </G>
    </Svg>
  );
};