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

export const PiUserSquareDuotone = (props: IconProps) => {
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
        <Path d="M208 40H48a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8M57.78 216A72 72 0 0 1 128 160a40 40 0 1 1 40-40 40 40 0 0 1-40 40 72 72 0 0 1 70.22 56Z" opacity={0.2} />
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M96 120a32 32 0 1 1 32 32 32 32 0 0 1-32-32m-27.33 88a64.45 64.45 0 0 1 19.13-25.8 64 64 0 0 1 80.4 0 64.45 64.45 0 0 1 19.13 25.8ZM208 208h-3.67a79.87 79.87 0 0 0-46.69-50.29 48 48 0 1 0-59.28 0A79.87 79.87 0 0 0 51.67 208H48V48h160z" />
      </G>
    </Svg>
  );
};