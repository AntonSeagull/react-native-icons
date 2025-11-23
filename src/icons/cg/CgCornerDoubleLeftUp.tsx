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

export const CgCornerDoubleLeftUp = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7.784 9.25 6.37 7.836l4.242-4.242 4.243 4.242L13.44 9.25l-2.829-2.828z" />
        <Path fill="currentColor" d="m13.44 13.493 1.415-1.414-4.243-4.243L6.37 12.08l1.414 1.414 1.847-1.847v4.76a4 4 0 0 0 4 4h4v-2h-4a2 2 0 0 1-2-2v-4.723z" />
      </G>
    </Svg>
  );
};