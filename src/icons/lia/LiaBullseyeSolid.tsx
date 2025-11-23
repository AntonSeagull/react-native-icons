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

export const LiaBullseyeSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C8.828 3 3 8.828 3 16s5.828 13 13 13 13-5.828 13-13S23.172 3 16 3m0 1c6.633 0 12 5.367 12 12s-5.367 12-12 12S4 22.633 4 16 9.367 4 16 4m0 2C10.488 6 6 10.488 6 16s4.488 10 10 10 10-4.488 10-10S21.512 6 16 6m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8m0 2c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4m0 2a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4" />
      </G>
    </Svg>
  );
};