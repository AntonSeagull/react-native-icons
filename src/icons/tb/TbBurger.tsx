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

export const TbBurger = (props: IconProps) => {
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
        <Path d="M4 15h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4M12 4c3.783 0 6.953 2.133 7.786 5H4.214C5.047 6.133 8.217 4 12 4M5 12h14" />
      </G>
    </Svg>
  );
};