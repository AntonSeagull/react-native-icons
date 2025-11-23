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

export const PiBrowsersDuotone = (props: IconProps) => {
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
        <Path d="M224 56v112a8 8 0 0 1-8 8h-24V88a8 8 0 0 0-8-8H64V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h144v16H40Zm144 112H40v-80h144zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z" />
      </G>
    </Svg>
  );
};