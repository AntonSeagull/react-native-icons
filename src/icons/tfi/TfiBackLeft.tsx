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

export const TfiBackLeft = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 7.5c0 3.033-2.467 5.5-5.5 5.5H6.588l2.646 2.646-.707.707L4.674 12.5l3.854-3.854.707.707L6.588 12H9.5c2.481 0 4.5-2.019 4.5-4.5S11.981 3 9.5 3H2.417V2H9.5C12.533 2 15 4.467 15 7.5" />
      </G>
    </Svg>
  );
};