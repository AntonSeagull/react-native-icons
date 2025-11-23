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

export const PiBluetoothConnectedFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M200 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6 8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L59.2 86.4a8 8 0 0 1 9.6-12.8L120 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L141.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4M72 128a12 12 0 1 0-12 12 12 12 0 0 0 12-12m132-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};