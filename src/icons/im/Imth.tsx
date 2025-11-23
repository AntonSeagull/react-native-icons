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

export const Imth = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 15a7 7 0 0 1-2.769-.57l3.643-4.098A.5.5 0 0 0 9 10V8.5a.5.5 0 0 0-.5-.5C6.735 8 4.872 6.165 4.854 6.146A.5.5 0 0 0 4.5 6h-2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .276.447L4 10.809v2.936A6.99 6.99 0 0 1 1 8a7 7 0 0 1 .674-3H3.5c.133 0 .26-.053.354-.146l2-2A.5.5 0 0 0 6 2.5V1.29A7 7 0 0 1 8 1c1.1 0 2.141.254 3.067.706A2.98 2.98 0 0 0 10 3.999c0 .801.312 1.555.879 2.121a3 3 0 0 0 2.268.875c.216.809.605 2.917-.131 5.818a1 1 0 0 0-.013.082 6.98 6.98 0 0 1-5.002 2.104z" />
      </G>
    </Svg>
  );
};