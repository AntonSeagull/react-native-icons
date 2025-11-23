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

export const PiBluetoothXThin = (props: IconProps) => {
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
        <Path d="M178.4 172.8 118.67 128l27.73-20.8a4 4 0 1 0-4.8-6.4L116 120V40l25.6 19.2a4 4 0 0 0 4.8-6.4l-32-24A4 4 0 0 0 108 32v88L50.4 76.8a4 4 0 0 0-4.8 6.4l59.73 44.8-59.73 44.8a4 4 0 0 0 4.8 6.4L108 136v88a4 4 0 0 0 2.21 3.58 4.05 4.05 0 0 0 1.79.42 4 4 0 0 0 2.4-.8l64-48a4 4 0 0 0 0-6.4M116 216v-80l53.33 40Zm118.83-114.83a4 4 0 0 1-5.66 5.66L208 85.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L202.34 80l-21.17-21.17a4 4 0 0 1 5.66-5.66L208 74.34l21.17-21.17a4 4 0 1 1 5.66 5.66L213.66 80Z" />
      </G>
    </Svg>
  );
};