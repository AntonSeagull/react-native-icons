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

export const DiPhp = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M10.372 13.069H6.405L4.69 21.753h2.037l.429-2.251h1.93c1.822.107 3.86-1.394 3.86-3.967 0-1.501-.858-2.359-2.573-2.466zm-1.501 4.825H7.584l.536-3.216h1.394c.75 0 1.287.322 1.287.965-.107 1.823-.965 2.144-1.93 2.251m8.684-4.825h-1.93l.429-2.251h-2.037l-1.715 8.684h2.037l.965-4.824h1.608c.751 0 .751.322.643.858l-.75 3.967h2.144l.75-4.396c.214-1.072-.429-1.93-2.144-2.037zm7.183 0h-3.967l-1.715 8.684h2.037l.429-2.251h1.93c1.823.107 3.86-1.394 3.86-3.967 0-1.501-.858-2.359-2.573-2.466zm-1.501 4.825H21.95l.536-3.216h1.394c.751 0 1.287.322 1.287.965-.107 1.823-.965 2.144-1.93 2.251" />
      </G>
    </Svg>
  );
};