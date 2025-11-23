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

export const SiPhosphoricons = (props: IconProps) => {
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
        <Path d="M12.404.001H3.866a.62.62 0 0 0-.619.619v15.173A8.217 8.217 0 0 0 11.449 24a.617.617 0 0 0 .618-.619v-6.969h.332a8.2 8.2 0 0 0 7.715-5.031 8.22 8.22 0 0 0 0-6.349A8.21 8.21 0 0 0 12.399.001zm-1.579 22.736a6.98 6.98 0 0 1-6.317-6.317h6.317zm0-9.562L4.869 1.238h5.967zm1.579 2h-.331V1.238h.331a6.98 6.98 0 0 1 5.016 1.993 7 7 0 0 1 1.546 2.277 6.99 6.99 0 0 1 0 5.397 6.975 6.975 0 0 1-6.562 4.27" />
      </G>
    </Svg>
  );
};