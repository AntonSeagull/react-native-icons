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

export const PiSkipBackCircleThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m33.94-135.5a4 4 0 0 0-4.06.11L100 120.78V88a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0v-32.78l57.88 36.17a4 4 0 0 0 2.12.61 4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 164 168V88a4 4 0 0 0-2.06-3.5M156 160.78 103.55 128 156 95.22Z" />
      </G>
    </Svg>
  );
};