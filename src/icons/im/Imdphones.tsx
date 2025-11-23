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

export const Imdphones = (props: IconProps) => {
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
        <Path d="M4.5 9h-1v7h1c.275 0 .5-.225.5-.5v-6c0-.275-.225-.5-.5-.5M11.5 9c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5h1V9z" />
        <Path d="M16 8A8 8 0 1 0 .479 10.732 3.5 3.5 0 0 0 3 15.964V9.036a3.5 3.5 0 0 0-1.371.506 6.5 6.5 0 1 1 12.743 0A3.5 3.5 0 0 0 13 9.035v6.929a3.5 3.5 0 0 0 2.521-5.232C15.831 9.879 16 8.959 16 8" />
      </G>
    </Svg>
  );
};