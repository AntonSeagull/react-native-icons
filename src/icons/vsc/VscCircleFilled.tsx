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

export const VscCircleFilled = (props: IconProps) => {
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
        <Path d="M8 4q.55 0 1.063.145a3.94 3.94 0 0 1 1.762 1.031 3.94 3.94 0 0 1 1.03 1.762Q12 7.448 12 8q0 .55-.145 1.063a3.94 3.94 0 0 1-1.03 1.765 4 4 0 0 1-1.762 1.031Q8.55 12 8 12c-.55 0-.721-.047-1.063-.14a4.06 4.06 0 0 1-1.765-1.032A4.06 4.06 0 0 1 4.14 9.062 4 4 0 0 1 4 8q0-.55.14-1.063a4 4 0 0 1 .407-.953A4.1 4.1 0 0 1 5.98 4.546a4 4 0 0 1 .957-.401A3.9 3.9 0 0 1 8 4" />
      </G>
    </Svg>
  );
};