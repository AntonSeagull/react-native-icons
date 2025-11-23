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

export const ImeUp = (props: IconProps) => {
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
        <Path d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1zM3 3h1.5v1H3zM5 3h1v1.5H5zM1 6.5h1V8H1zM2.5 7H4v1H2.5zM4.5 7H6v1H4.5zM1 4.5h1V6H1zM5 5h1v1.5H5zM5 11v3H2v-3zm1-1H1v5h5z" />
      </G>
    </Svg>
  );
};