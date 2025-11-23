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

export const DiErlang = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 34 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 17, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M6.673 25.45c-2.318-2.456-3.674-5.849-3.671-9.898-.003-3.58 1.122-6.658 3.056-9l-.003.001H1.99V25.45zM28.081 25.452c.999-1.069 1.893-2.329 2.704-3.769l-4.499-2.25c-1.58 2.569-3.891 4.933-7.086 4.949-4.651-.016-6.478-3.992-6.468-9.111H30.11c.023-.578.023-.847 0-1.125.113-3.045-.694-5.605-2.162-7.598l-.008.006h3.913v18.897z" />
        <Path fill="#444" d="M13.013 10.884c.192-2.317 2.02-3.876 4.162-3.881 2.157.005 3.715 1.563 3.768 3.881z" />
      </G>
    </Svg>
  );
};