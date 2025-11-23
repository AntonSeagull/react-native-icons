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

export const TbBrandTinderFilled = (props: IconProps) => {
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
        <Path d="M11.595 2.13a1 1 0 0 1 1.455-1.016c3.11 1.625 5.41 3.797 6.77 6.627l-.013-.024.01.019.115.232c2.751 5.7.088 12.587-5.913 13.76l-.267.049c-8.719 1.91-14.455-8.74-7.97-14.918.466-.46 1.28-1.196 1.636-1.45A1 1 0 0 1 9 6.222c0 .311.086 1.117.205 1.694q.046.215.093.383l.017.058.1-.02c1.562-.396 2.522-3.021 2.21-5.955z" />
      </G>
    </Svg>
  );
};