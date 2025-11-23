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

export const GrAction = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="m1 23 3-3zM20 4l3-3zM9 11l3-3zm4 4 3-3zM10 5l9 9 1-1c2-2 4.053-5 0-9s-7-2-9 0zm-6 6 1-1 9 9-1 1c-2 2-5 4.087-9 0s-2-7 0-9Z" />
      </G>
    </Svg>
  );
};