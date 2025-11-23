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

export const PiAsteriskFill = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m59.43 129.07a8 8 0 0 1-4 14.93 7.9 7.9 0 0 1-4-1.07L136 141.86V192a8 8 0 0 1-16 0v-50.14l-43.43 25.07A8 8 0 0 1 65.65 164a8 8 0 0 1 2.92-10.93L112 128l-43.43-25.07a8 8 0 0 1 8-13.86L120 114.14V64a8 8 0 0 1 16 0v50.14l43.43-25.07a8 8 0 0 1 8 13.86L144 128Z" />
      </G>
    </Svg>
  );
};