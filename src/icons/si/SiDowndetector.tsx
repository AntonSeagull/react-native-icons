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

export const SiDowndetector = (props: IconProps) => {
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
        <Path d="M12 0C5.49 0 .257 5.362.257 12v12H12c6.51 0 11.743-5.362 11.743-12S18.51 0 12 0m0 3.51c.543 0 1.086.065 1.66.192.383.128.639.383.639.766l-.638 10.085c0 .255-.256.511-.512.511-.766.128-1.533.128-2.171 0-.383 0-.639-.256-.639-.51L9.701 4.467c0-.383.256-.638.638-.766A7.6 7.6 0 0 1 12 3.51m.065 12.99q.67 0 1.339.095c.255 0 .384.256.384.384.127.894.127 1.786 0 2.807 0 .256-.257.384-.384.384a9.4 9.4 0 0 1-2.68 0c-.256 0-.384-.256-.384-.384-.128-.893-.128-1.786 0-2.807 0-.255.256-.384.383-.384a9.5 9.5 0 0 1 1.342-.095" />
      </G>
    </Svg>
  );
};