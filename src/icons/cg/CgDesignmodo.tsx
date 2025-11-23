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

export const CgDesignmodo = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M7 4.054a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-2 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" clipRule="evenodd" />
        <Path fill="currentColor" d="M22 10.554h-5v-3h5zM11.55 16.946a4 4 0 0 0 2.829-1.172l2.121 2.121a6.98 6.98 0 0 1-4.95 2.05 6.98 6.98 0 0 1-4.95-2.05l2.122-2.12a3.99 3.99 0 0 0 2.828 1.17" />
      </G>
    </Svg>
  );
};