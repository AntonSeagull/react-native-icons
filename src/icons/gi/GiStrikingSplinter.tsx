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

export const GiStrikingSplinter = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m23.018 20.705 135.64 163.623-107.33-32.39 168.79 111.326L82.784 224.11l192.51 111.87-130.525-1.76 282.08 126.116a429 429 0 0 0 42.728 19.246l2.297.885 20.797 9.3-16.895-37.82a399 399 0 0 0-12.03-26.926L338.312 144.24l1.094 129.362L228.352 82.393l38.482 136.49L155.906 50.668l31.684 106.467zm225.148 225.178c94.262 38.75 169.608 116.195 208.152 207.924-91.01-40.827-168.835-115.908-208.152-207.924" />
      </G>
    </Svg>
  );
};