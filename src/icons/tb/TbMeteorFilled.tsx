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

export const TbMeteorFilled = (props: IconProps) => {
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
        <Path d="M21.874 3.486 17.7 11H21c.846 0 1.293.973.791 1.612l-.074.085-6.9 7.095A7.5 7.5 0 1 1 4.607 8.818l7.746-6.58c.722-.614 1.814.028 1.628.958l-.577 2.879 7.11-3.95c.88-.488 1.849.481 1.36 1.36M9.5 11a3.5 3.5 0 0 0-3.495 3.308L6 14.5A3.5 3.5 0 1 0 9.5 11" />
      </G>
    </Svg>
  );
};