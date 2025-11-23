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

export const PiDropHalfBottomDuotone = (props: IconProps) => {
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
        <Path d="M208 144a80 80 0 0 1-160 0 101 101 0 0 1 1.3-16h157.4a101 101 0 0 1 1.3 16" opacity={0.2} />
        <Path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3 8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26m0 190a72.08 72.08 0 0 1-72-72q0-4 .36-8h143.28q.36 4 .36 8a72.08 72.08 0 0 1-72 72" />
      </G>
    </Svg>
  );
};