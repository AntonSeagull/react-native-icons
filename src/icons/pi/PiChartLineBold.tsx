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

export const PiChartLineBold = (props: IconProps) => {
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
        <Path d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v85.55L88.1 95a12 12 0 0 1 15.1-.57l56.22 42.16L216.1 87a12 12 0 1 1 15.8 18l-64 56a12 12 0 0 1-15.1.57l-56.22-42.13L44 165.45V196h180a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};