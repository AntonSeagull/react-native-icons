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

export const TbDeviceWatchOff = (props: IconProps) => {
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
        <Path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132A3 3 0 0 1 15 18H9a3 3 0 0 1-3-3V9c0-.817.327-1.559.857-2.1M9 18v3h6v-3M9 5V3h6v3M3 3l18 18" />
      </G>
    </Svg>
  );
};