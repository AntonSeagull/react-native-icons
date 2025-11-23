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

export const PiResizeLight = (props: IconProps) => {
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
        <Path d="M136 114H48a6 6 0 0 0-6 6v88a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6v-88a6 6 0 0 0-6-6m-6 88H54v-76h76Zm84-18v16a14 14 0 0 1-14 14h-24a6 6 0 0 1 0-12h24a2 2 0 0 0 2-2v-16a6 6 0 0 1 12 0m0-72v32a6 6 0 0 1-12 0v-32a6 6 0 0 1 12 0m0-56v16a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2h-16a6 6 0 0 1 0-12h16a14 14 0 0 1 14 14m-64-8a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6M42 80V56a14 14 0 0 1 14-14h16a6 6 0 0 1 0 12H56a2 2 0 0 0-2 2v24a6 6 0 0 1-12 0" />
      </G>
    </Svg>
  );
};