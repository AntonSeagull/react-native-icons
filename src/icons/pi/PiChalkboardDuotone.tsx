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

export const PiChalkboardDuotone = (props: IconProps) => {
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
        <Path d="M192 80v88h-72v32H64V80Z" opacity={0.2} />
        <Path d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 56h176v136h-16v-24a8 8 0 0 0-8-8h-72a8 8 0 0 0-8 8v24H72V88h112v48a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v112H40Zm144 136h-56v-16h56Z" />
      </G>
    </Svg>
  );
};