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

export const PiFadersHorizontalFill = (props: IconProps) => {
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
        <Path d="M184 80a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8M40 88h96v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16m176 80h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M96 144H80a8 8 0 0 0-8 8v16H40a8 8 0 0 0 0 16h32v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};