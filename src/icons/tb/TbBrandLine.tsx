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

export const TbBrandLine = (props: IconProps) => {
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
        <Path d="M21 10.663C21 6.439 16.959 3 12 3s-9 3.439-9 7.663c0 3.783 3.201 6.958 7.527 7.56 1.053.239.932.644.696 2.133-.039.238-.184.932.777.512.96-.42 5.18-3.201 7.073-5.48C20.377 13.884 21 12.359 21 10.673z" />
      </G>
    </Svg>
  );
};