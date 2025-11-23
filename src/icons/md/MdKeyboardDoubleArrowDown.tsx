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

export const MdKeyboardDoubleArrowDown = (props: IconProps) => {
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
        <Path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z" />
        <Path d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z" />
      </G>
    </Svg>
  );
};