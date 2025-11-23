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

export const RiCornerUpLeftDoubleLine = (props: IconProps) => {
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
        <Path d="M20 10v9h-2v-7h-6.172l3.95 3.95-1.414 1.414L8 11l6.364-6.364 1.414 1.414-3.95 3.95zM8.75 4.636l1.414 1.414L5.214 11l4.95 4.95-1.414 1.414L2.386 11z" />
      </G>
    </Svg>
  );
};