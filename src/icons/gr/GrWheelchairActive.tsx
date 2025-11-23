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

export const GrWheelchairActive = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 6 3-3 7 3v2l-3 3M9 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-5 5 3-2 6m2-17a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 6 4-4m-6 4 4-4" />
      </G>
    </Svg>
  );
};