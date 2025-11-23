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

export const TbDropletHalfFilled = (props: IconProps) => {
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
        <Path d="m12 2 .07.003a2.41 2.41 0 0 1 1.825.907l.108.148 4.92 7.306c1.952 3.267 1.191 7.42-1.796 9.836-2.968 2.402-7.285 2.402-10.254 0-2.917-2.36-3.711-6.376-1.901-9.65l.134-.232 4.893-7.26c.185-.275.426-.509.709-.686a2.4 2.4 0 0 1 1.066-.36zm-1 3.149-4.206 6.24c-1.44 2.41-.88 5.463 1.337 7.257A6.1 6.1 0 0 0 11 19.922z" />
      </G>
    </Svg>
  );
};