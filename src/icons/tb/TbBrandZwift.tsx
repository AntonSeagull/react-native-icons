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

export const TbBrandZwift = (props: IconProps) => {
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
        <Path d="M5.5 4C4.035 4 3 5.101 3 6.5S4.035 9 5.5 9H8l-4.637 7.19a2.43 2.43 0 0 0-.011 2.538c.473.787 1.35 1.272 2.3 1.272H16.5c1.465 0 2.5-1.101 2.5-2.5S17.965 15 16.5 15H14l7-11z" />
      </G>
    </Svg>
  );
};