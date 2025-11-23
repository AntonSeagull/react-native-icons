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

export const PiAlarmBold = (props: IconProps) => {
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
        <Path d="M128 36a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 36m0 176a76 76 0 1 1 76-76 76.08 76.08 0 0 1-76 76M32.49 72.49a12 12 0 1 1-17-17l32-32a12 12 0 1 1 17 17Zm208 0a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17l32 32a12 12 0 0 1 0 17M176 124a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12V88a12 12 0 0 1 24 0v36Z" />
      </G>
    </Svg>
  );
};