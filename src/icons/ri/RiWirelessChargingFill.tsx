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

export const RiWirelessChargingFill = (props: IconProps) => {
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
        <Path d="m3.929 4.929 1.414 1.414A7.98 7.98 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.97 9.97 0 0 1 1 12a9.97 9.97 0 0 1 2.929-7.071m16.142 0A9.97 9.97 0 0 1 23 12a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-2.342-5.656zM13 5v6h3l-5 8v-6H8zM6.757 7.757l1.415 1.415A4 4 0 0 0 7 12c0 1.104.448 2.105 1.172 2.828l-1.415 1.415A5.98 5.98 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243m10.487.001A5.98 5.98 0 0 1 19 12a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.415A3.99 3.99 0 0 0 17 12a3.99 3.99 0 0 0-1.17-2.827z" />
      </G>
    </Svg>
  );
};