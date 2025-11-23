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

export const PiRectangleDashedDuotone = (props: IconProps) => {
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
        <Path d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M80 48a8 8 0 0 1-8 8H40v16a8 8 0 0 1-16 0V56a16 16 0 0 1 16-16h32a8 8 0 0 1 8 8M32 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m40 48H40v-16a8 8 0 0 0-16 0v16a16 16 0 0 0 16 16h32a8 8 0 0 0 0-16m72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16m80-24a8 8 0 0 0-8 8v16h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16v-16a8 8 0 0 0-8-8m0-72a8 8 0 0 0-8 8v32a8 8 0 0 0 16 0v-32a8 8 0 0 0-8-8m-8-64h-32a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0V56a16 16 0 0 0-16-16m-72 0h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16" />
      </G>
    </Svg>
  );
};