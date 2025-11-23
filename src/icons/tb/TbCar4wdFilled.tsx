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

export const TbCar4wdFilled = (props: IconProps) => {
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
        <Path d="M17 2a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0h-1v10h1a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0h-4a3 3 0 0 1-6 0v-2a3 3 0 0 1 6 0h1V7h-1a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0h4a3 3 0 0 1 3-3" />
      </G>
    </Svg>
  );
};