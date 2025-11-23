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

export const LiaStumbleupon = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 4c-3.859 0-7 3.14-7 7v9.5c0 .827-.673 1.5-1.5 1.5S6 21.327 6 20.5V16H1v4.5C1 24.084 3.916 27 7.5 27s6.5-2.916 6.5-6.5V11c0-1.103.897-2 2-2s2 .897 2 2v1.922l1.889.879L23 12.877V11c0-3.86-3.141-7-7-7m10 12v4.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-4.494l-3.348.996L18 16.23v4.27c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5V16z" />
      </G>
    </Svg>
  );
};