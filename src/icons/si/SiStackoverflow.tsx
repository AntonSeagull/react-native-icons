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

export const SiStackoverflow = (props: IconProps) => {
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
        <Path d="m15.725 0-1.72 1.277 6.39 8.588 1.716-1.277zm-3.94 3.418-1.369 1.644 8.225 6.85 1.369-1.644zm-3.15 4.465-.905 1.94 9.702 4.517.904-1.94zm-1.85 4.86-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
      </G>
    </Svg>
  );
};