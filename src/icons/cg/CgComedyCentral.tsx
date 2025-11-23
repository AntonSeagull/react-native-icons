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

export const CgComedyCentral = (props: IconProps) => {
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
        <Path fill="currentColor" d="M10.545 19a7 7 0 1 0-4.95-11.95L3.473 4.93l-.018.018A9.97 9.97 0 0 1 10.545 2c5.522 0 10 4.477 10 10s-4.478 10-10 10a9.97 9.97 0 0 1-7.072-2.929l2.122-2.121a6.98 6.98 0 0 0 4.95 2.05" />
        <Path fill="currentColor" d="M10.545 14c.593 0 1.125-.258 1.492-.668l2.122 2.122a5 5 0 1 1 0-6.909l-2.122 2.123A2 2 0 1 0 10.545 14" />
      </G>
    </Svg>
  );
};