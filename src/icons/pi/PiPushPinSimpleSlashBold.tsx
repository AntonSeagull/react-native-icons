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

export const PiPushPinSimpleSlashBold = (props: IconProps) => {
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
        <Path d="m216.88 207.93-160-176a12 12 0 1 0-17.76 16.14L62 73.19 45.93 164H40a12 12 0 0 0 0 24h76v52a12 12 0 0 0 24 0v-52h26.33l32.79 36.07a12 12 0 0 0 17.76-16.14M70.3 164l12.07-68.36L144.51 164ZM90.06 40a12 12 0 0 1 12-12H192a12 12 0 0 1 0 24h-1.7l15.33 86.84a12 12 0 0 1-9.73 13.91 12.6 12.6 0 0 1-2.1.18A12 12 0 0 1 182 143l-16.07-91h-63.87a12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};