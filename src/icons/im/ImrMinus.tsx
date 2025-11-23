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

export const ImrMinus = (props: IconProps) => {
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
        <Path d="M6 11.5a5.51 5.51 0 0 1 3.594-5.159A4.6 4.6 0 0 0 10 4.5C10 2.015 10 0 7 0S4 2.015 4 4.5c0 1.548.898 3.095 2 3.716v.825C2.608 9.318 0 10.985 0 13h6.208A5.5 5.5 0 0 1 6 11.5" />
        <Path d="M11.5 7a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m2.5 5H9v-1h5z" />
      </G>
    </Svg>
  );
};