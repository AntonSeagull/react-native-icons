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

export const PiAsteriskLight = (props: IconProps) => {
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
        <Path d="M213.14 179.09a6 6 0 0 1-8.23 2.06L134 138.6V216a6 6 0 0 1-12 0v-77.4l-70.91 42.55A6.07 6.07 0 0 1 48 182a6 6 0 0 1-3.1-11.15L116.34 128 44.91 85.15a6 6 0 0 1 6.18-10.3L122 117.4V40a6 6 0 0 1 12 0v77.4l70.91-42.55a6 6 0 0 1 6.18 10.3L139.66 128l71.43 42.85a6 6 0 0 1 2.05 8.24" />
      </G>
    </Svg>
  );
};