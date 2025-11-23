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

export const SiLogitechg = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12.566 0Q10.083 0 7.89.941a12.1 12.1 0 0 0-3.86 2.569 12 12 0 0 0-2.582 3.822Q.482 9.503.506 11.988q0 2.486.941 4.68c.854 1.97 2.677 4.771 6.442 6.367q2.194.965 4.677.965v-4.992q-1.47 0-2.75-.555a7.1 7.1 0 0 1-3.738-3.74 6.96 6.96 0 0 1 0-5.451 7.1 7.1 0 0 1 3.738-3.739 6.8 6.8 0 0 1 2.75-.554Zm.17 9.842v4.943h5.813V20.6h4.945V9.842Z" />
      </G>
    </Svg>
  );
};