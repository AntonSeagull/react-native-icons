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

export const GiIronCross = (props: IconProps) => {
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
        <Path d="M486 371.316V142.75a399.06 399.06 0 0 1-185.685 69.28 399.14 399.14 0 0 1 70.973-186.002H142.72A399.06 399.06 0 0 1 212 211.714 399.14 399.14 0 0 1 26 140.74v228.57a399.06 399.06 0 0 1 185.685-69.28 399.14 399.14 0 0 1-70.973 185.944H369.28A399.06 399.06 0 0 1 300 300.342a399.14 399.14 0 0 1 186 70.974" />
      </G>
    </Svg>
  );
};