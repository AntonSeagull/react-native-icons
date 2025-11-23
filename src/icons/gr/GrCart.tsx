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

export const GrCart = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M5 5h17l-2 9H7L4 2H0m7 12 1 4h13m-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM9 23a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      </G>
    </Svg>
  );
};