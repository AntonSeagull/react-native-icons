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

export const SiCytoscapedotjs = (props: IconProps) => {
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
        <Path d="M24 0v24H0V0zm-4.842 7.26a1.86 1.86 0 0 0-1.841 1.61l-2.71.683a1.86 1.86 0 0 0-1.55-.834 1.858 1.858 0 1 0 .738 3.563l1.792 1.83-.049.093-2.345-.316a1.86 1.86 0 1 0-1.826 2.2 1.86 1.86 0 0 0 1.636-.977l2.346.316q.032.211.107.412l-.984.867a1.1 1.1 0 0 0-.318-.046 1.134 1.134 0 1 0 1.124.987l.945-.832a2.05 2.05 0 0 0 1.402.342l.835 1.665a1.85 1.85 0 0 0-.501 1.27 1.858 1.858 0 1 0 1.597-1.84l-.803-1.605a2.05 2.05 0 0 0 .683-1.53 2.06 2.06 0 0 0-.936-1.725l.735-2.419a1.858 1.858 0 0 0-.077-3.714m-1.582 2.832c.125.202.287.378.477.519l-.745 2.452a2.05 2.05 0 0 0-.819.201l-1.787-1.824a1.9 1.9 0 0 0 .203-.674z" />
      </G>
    </Svg>
  );
};