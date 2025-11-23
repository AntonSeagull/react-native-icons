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

export const PiCookingPotFill = (props: IconProps) => {
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
        <Path d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m94.4 35.2a8 8 0 0 0-11.2-1.6L224 104V80a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v24L12.8 89.6a8 8 0 0 0-9.6 12.8L32 124v60a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-60l28.8-21.6a8 8 0 0 0 1.6-11.2" />
      </G>
    </Svg>
  );
};