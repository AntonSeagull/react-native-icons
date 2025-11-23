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

export const TbBikeOff = (props: IconProps) => {
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
        <Path d="M2 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16.437 16.44a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3M12 19v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3M16 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
      </G>
    </Svg>
  );
};