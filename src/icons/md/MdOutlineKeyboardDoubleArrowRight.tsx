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

export const MdOutlineKeyboardDoubleArrowRight = (props: IconProps) => {
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
        <Path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
        <Path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
      </G>
    </Svg>
  );
};