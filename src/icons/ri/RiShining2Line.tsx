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

export const RiShining2Line = (props: IconProps) => {
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
        <Path d="m16 8 7.5 4-7.5 4-4 7.5L8 16 .5 12 8 8l4-7.5zm3.25 4-4.728-2.522L12 4.75 9.478 9.478 4.75 12l4.728 2.522L12 19.25l2.522-4.728z" />
      </G>
    </Svg>
  );
};