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

export const GrInstall = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M19 13.5v4L12 22l-7-4.5v-4m7 8.5v-8.5m6.5-5-6.5-4L15.5 2 22 6l-3.5 2.5Zm-13 0 6.5-4L8.5 2 2 6l3.5 2.5Zm13 .5L12 13l3.5 2.5 6.5-4L18.5 9Zm-13 0 6.5 4-3.5 2.5-6.5-4L5.5 9Z" />
      </G>
    </Svg>
  );
};