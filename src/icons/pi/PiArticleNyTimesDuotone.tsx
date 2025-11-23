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

export const PiArticleNyTimesDuotone = (props: IconProps) => {
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
        <Path d="M232 104v96H80v-32h48v-64Z" opacity={0.2} />
        <Path d="M128 96h104a8 8 0 0 1 0 16H128a8 8 0 0 1 0-16m104 32H128a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16m0 32H80a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16M96 144a8 8 0 0 0 0-16h-8V64h32v8a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-8h32v64h-8a8 8 0 0 0 0 16Z" />
      </G>
    </Svg>
  );
};