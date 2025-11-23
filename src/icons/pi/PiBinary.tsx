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

export const PiBinary = (props: IconProps) => {
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
        <Path d="M94 24c-22.37 0-38 19.74-38 48s15.63 48 38 48 38-19.74 38-48-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32 22 20.11 22 32-4.63 32-22 32m72 32c-22.37 0-38 19.74-38 48s15.63 48 38 48 38-19.74 38-48-15.63-48-38-48m0 80c-17.37 0-22-20.11-22-32s4.63-32 22-32 22 20.11 22 32-4.63 32-22 32M145 49.22a8 8 0 0 1 3.11-10.88l24-13.33A8 8 0 0 1 184 32v80a8 8 0 0 1-16 0V45.6l-12.12 6.73A8 8 0 0 1 145 49.22M104 144v80a8 8 0 0 1-16 0v-66.4l-12.12 6.73a8 8 0 0 1-7.76-14l24-13.33a8 8 0 0 1 11.88 7" />
      </G>
    </Svg>
  );
};