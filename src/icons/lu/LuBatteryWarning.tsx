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

export const LuBatteryWarning = (props: IconProps) => {
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
        <Path d="M10 17h.01M10 7v6M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2M22 14v-4M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
      </G>
    </Svg>
  );
};