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

export const TbButterflyFilled = (props: IconProps) => {
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
        <Path d="m17.117 6.244.228.076a5.5 5.5 0 0 1 1.24 9.738l-.063.039.02.034a4 4 0 0 1 .101 3.533l-.093.19A4 4 0 0 1 13 21.462V6.605a5.5 5.5 0 0 1 4.118-.36M8.505 6c.885 0 1.736.21 2.495.597v14.87a4 4 0 0 1-1.012.41l-.196.045a4 4 0 0 1-4.424-5.587l.118-.238-.035-.023a5.5 5.5 0 0 1-2.397-5.258l.034-.233A5.5 5.5 0 0 1 8.505 6M14.445 2.168a1 1 0 0 1 1.11 1.664l-3 2a1 1 0 0 1-1.11 0l-3-2a1 1 0 0 1 1.11-1.664l2.444 1.63z" />
      </G>
    </Svg>
  );
};