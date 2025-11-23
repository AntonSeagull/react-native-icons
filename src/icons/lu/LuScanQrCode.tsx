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

export const LuScanQrCode = (props: IconProps) => {
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
        <Path d="M17 12v4a1 1 0 0 1-1 1h-4M17 3h2a2 2 0 0 1 2 2v2M17 8V7M21 17v2a2 2 0 0 1-2 2h-2M3 7V5a2 2 0 0 1 2-2h2M7 17h.01M7 21H5a2 2 0 0 1-2-2v-2" />
        <Rect width={5} height={5} x={7} y={7} rx={1} />
      </G>
    </Svg>
  );
};