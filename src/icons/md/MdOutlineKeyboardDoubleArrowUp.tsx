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

export const MdOutlineKeyboardDoubleArrowUp = (props: IconProps) => {
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
        <Path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z" />
        <Path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z" />
      </G>
    </Svg>
  );
};