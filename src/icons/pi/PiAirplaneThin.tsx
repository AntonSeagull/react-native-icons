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

export const PiAirplaneThin = (props: IconProps) => {
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
        <Path d="M233.79 132.42 156 93.53V48a28 28 0 0 0-56 0v45.53l-77.79 38.89A4 4 0 0 0 20 136v32a4 4 0 0 0 4.78 3.92l75.22-15v25.46l-14.83 14.79A4 4 0 0 0 84 200v32a4 4 0 0 0 5.49 3.71l38.51-15.4 38.51 15.4a3.9 3.9 0 0 0 1.49.29 3.94 3.94 0 0 0 2.24-.69A4 4 0 0 0 172 232v-32a4 4 0 0 0-1.17-2.83L156 182.34v-25.46l75.22 15A4 4 0 0 0 236 168v-32a4 4 0 0 0-2.21-3.58m-5.79 30.7-75.22-15A4 4 0 0 0 148 152v32a4 4 0 0 0 1.17 2.83L164 201.66v24.43l-34.51-13.8a4 4 0 0 0-3 0L92 226.09v-24.43l14.83-14.83A4 4 0 0 0 108 184v-32a4 4 0 0 0-4.78-3.92L28 163.12v-24.65l77.79-38.89A4 4 0 0 0 108 96V48a20 20 0 0 1 40 0v48a4 4 0 0 0 2.21 3.58L228 138.47Z" />
      </G>
    </Svg>
  );
};