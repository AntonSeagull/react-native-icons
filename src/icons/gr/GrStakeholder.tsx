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

export const GrStakeholder = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="m14 9 4.5 2L23 9V4l-4.5-2L14 4zM7 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM1 23v-2c0-4 2.5-6 6-6s6 2 6 6v2zM14 4l4.5 2L23 4m-4.5 2v5z" />
      </G>
    </Svg>
  );
};