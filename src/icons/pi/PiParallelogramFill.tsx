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

export const PiParallelogramFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m246.58 62.57-64.8 144a16 16 0 0 1-14.59 9.43H24a16 16 0 0 1-14.58-22.57l64.8-144A16 16 0 0 1 88.81 40H232a16 16 0 0 1 14.59 22.57Z" />
      </G>
    </Svg>
  );
};