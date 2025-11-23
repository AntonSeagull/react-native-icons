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

export const FcDiploma1 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#E8EAF6" d="M4 9h40v30H4z" />
        <Path d="M30 34h2.8l-5-5-2.8 2.8 5 5zM18 34h-2.8l5-5 2.8 2.8-5 5z" />
        <Path fill="#9FA8DA" d="M11 15h26v4H11zM24 23c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5m0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" />
        <Path fill="#9FA8DA" d="M3 8v32h42V8zm40 27c-1.7 0-3 1.3-3 3H8c0-1.7-1.3-3-3-3V13c1.7 0 3-1.3 3-3h32c0 1.7 1.3 3 3 3z" />
      </G>
    </Svg>
  );
};