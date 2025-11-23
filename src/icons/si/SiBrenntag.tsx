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

export const SiBrenntag = (props: IconProps) => {
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
        <Path d="M19.73 12.01a8.07 8.07 0 0 1-3.274 2.421c.828 1.02 1.246 2.156.945 3.337-.288 1.128-1.366 2.228-2.9 2.228H6.5v-5.999h7c3.86 0 7-3.14 7-6.998S17.36 0 13.5 0h-11v8.998h4V3.999h7c1.655 0 3 1.345 3 3s-1.345 2.999-3 2.999h-11V24h12c3.86 0 7-3.14 7-6.998 0-1.712-.481-3.634-1.77-4.992" />
      </G>
    </Svg>
  );
};