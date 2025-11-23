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

export const TbBikeFilled = (props: IconProps) => {
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
        <Path d="M5 14a4 4 0 1 1-4 4l.005-.2A4 4 0 0 1 5 14M19 14a4 4 0 1 1-4 4l.005-.2A4 4 0 0 1 19 14" />
        <Path d="M14.832 7.445 16.535 10H19a1 1 0 0 1 .993.883L20 11a1 1 0 0 1-1 1h-3a1 1 0 0 1-.832-.445l-1.396-2.093-3.275 2.62 2.21 2.21a1 1 0 0 1 .284.577L13 15v4a1 1 0 0 1-2 0v-3.585l-2.707-2.708a1 1 0 0 1-.01-1.403l.092-.085 5-4a1 1 0 0 1 1.457.226M17 3a2 2 0 1 1-2 2l.005-.15A2 2 0 0 1 17 3" />
      </G>
    </Svg>
  );
};