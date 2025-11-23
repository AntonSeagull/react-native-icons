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

export const HiCube = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11 17a1 1 0 0 0 1.447.894l4-2A1 1 0 0 0 17 15V9.236a1 1 0 0 0-1.447-.894l-4 2a1 1 0 0 0-.553.894zm4.211-10.724a1 1 0 0 0 0-1.788l-4.764-2.382a1 1 0 0 0-.894 0L4.789 4.488a1 1 0 0 0 0 1.788l4.764 2.382a1 1 0 0 0 .894 0zM4.447 8.342A1 1 0 0 0 3 9.236V15a1 1 0 0 0 .553.894l4 2A1 1 0 0 0 9 17v-5.764a1 1 0 0 0-.553-.894z" />
      </G>
    </Svg>
  );
};