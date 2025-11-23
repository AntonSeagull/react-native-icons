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

export const RiFileHwpFill = (props: IconProps) => {
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
        <Path d="m16 2 5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2zM9.333 14.667H8V18h8v-1.333l-6.667-.001zM12 14.333a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 9a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 1.333a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334M12.667 6h-1.334v1.333H8v1.334h8V7.333h-3.334z" />
      </G>
    </Svg>
  );
};