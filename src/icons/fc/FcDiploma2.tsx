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

export const FcDiploma2 = (props: IconProps) => {
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
        <Path fill="#FBE9E7" d="M9 4h30v40H9z" />
        <Path d="M30 37h2.8l-5-5-2.8 2.8 5 5zM18 37h-2.8l5-5 2.8 2.8-5 5z" />
        <Path fill="#FF8A65" d="M15 13h18v4H15zM15 20h18v2H15zM24 26c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5m0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" />
        <Path fill="#FF8A65" d="M8 3v42h32V3zm30 37c-1.7 0-3 1.3-3 3H13c0-1.7-1.3-3-3-3V8c1.7 0 3-1.3 3-3h22c0 1.7 1.3 3 3 3z" />
      </G>
    </Svg>
  );
};