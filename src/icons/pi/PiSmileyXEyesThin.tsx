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

export const PiSmileyXEyesThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m58.83-121.17L173.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L168 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L162.34 112l-13.17-13.17a4 4 0 0 1 5.66-5.66L168 106.34l13.17-13.17a4 4 0 1 1 5.66 5.66m-80 0L93.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L88 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L82.34 112 69.17 98.83a4 4 0 0 1 5.66-5.66L88 106.34l13.17-13.17a4 4 0 0 1 5.66 5.66M136 180a8 8 0 1 1-8-8 8 8 0 0 1 8 8" />
      </G>
    </Svg>
  );
};