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

export const GrRedhat = (props: IconProps) => {
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
        <Path fill="#E00" d="M5.832 6.125Q6.8 2.52 8.492 3.24c1.691.722 2.416.481 3.141 0q.726-.48 2.175 0l3.384 1.443q1.45.48 1.934 3.366.483 2.884.725 3.846 3.625 1.443 4.109 4.328c.483 2.885-3.384 5.77-11.36 4.327S-.452 14.54.032 11.895q.483-2.644 4.592-2.644z" />
        <Path fill="#000" d="M4.887 8.538q2.193 3.76 8.04 4.7t6.82-1.88q.417 2.126 0 2.82c-.914 1.527-3.411 1.969-6.09 1.646q-5.846-.706-8.526-3.76-.73-.94-.731-1.646 0-.705.487-1.88" />
      </G>
    </Svg>
  );
};