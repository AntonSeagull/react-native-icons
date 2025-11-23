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

export const RiScissors2Fill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m12 14.118-2.317 2.316a4 4 0 1 1-2.121-2.121l2.317-2.316L4.21 6.329a2 2 0 0 1 0-2.828l.708-.707L12 9.875l7.081-7.081.708.707a2 2 0 0 1 0 2.828l-5.668 5.668 2.317 2.316a4 4 0 1 1-2.121 2.121zm-6 5.879a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      </G>
    </Svg>
  );
};