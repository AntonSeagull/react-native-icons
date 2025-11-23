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

export const LiaInfinitySolid = (props: IconProps) => {
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
        <Path d="M9 9c-3.855 0-7 3.145-7 7 0 3.86 3.14 7 7 7 2.93 0 4.719-1.61 6.094-3.594-.41-.66-.754-1.312-1.094-1.937C12.773 19.496 11.398 21 9 21c-2.758 0-5-2.242-5-5 0-2.773 2.227-5 5-5 1.617 0 2.645.578 3.594 1.563.949.984 1.75 2.406 2.562 3.906.813 1.5 1.637 3.078 2.844 4.343S20.871 23 23 23c3.855 0 7-3.145 7-7 0-3.86-3.14-7-7-7-2.914 0-4.715 1.559-6.094 3.5q.615.973 1.125 1.906C19.25 12.437 20.61 11 23 11c2.758 0 5 2.242 5 5 0 2.773-2.227 5-5 5-1.59 0-2.59-.578-3.531-1.562s-1.746-2.407-2.563-3.907c-.816-1.5-1.656-3.078-2.875-4.344C12.812 9.923 11.148 9 9 9" />
      </G>
    </Svg>
  );
};