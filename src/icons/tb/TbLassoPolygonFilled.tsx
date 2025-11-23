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

export const TbLassoPolygonFilled = (props: IconProps) => {
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
        <Path d="m5.581 2.186 6.566 4.69 7.502-2.812a1 1 0 0 1 1.326.714l.019.112 1 9a1 1 0 0 1-.678 1.059l-9 3a1 1 0 0 1-.553.023L7.329 16.89a3 3 0 0 1-1.287.923c.095.986.374 1.9.826 2.69a1 1 0 0 1-1.736.993c-.624-1.09-.99-2.335-1.098-3.656A3 3 0 0 1 2 15l.005-.176a3 3 0 0 1 .86-1.932l-.818-2.59a1 1 0 0 1-.009-.577l2-7a1 1 0 0 1 1.543-.539m-.009 2.451L4.044 9.985l.642 2.031Q4.841 12 5 12a3 3 0 0 1 3 2.995l3.957.965 7.96-2.654-.769-6.919-6.797 2.55a1 1 0 0 1-.827-.058l-.105-.065z" />
      </G>
    </Svg>
  );
};