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

export const PiResizeThin = (props: IconProps) => {
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
        <Path d="M136 116H48a4 4 0 0 0-4 4v88a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-88a4 4 0 0 0-4-4m-4 88H52v-80h80Zm80-20v16a12 12 0 0 1-12 12h-24a4 4 0 0 1 0-8h24a4 4 0 0 0 4-4v-16a4 4 0 0 1 8 0m0-72v32a4 4 0 0 1-8 0v-32a4 4 0 0 1 8 0m0-56v16a4 4 0 0 1-8 0V56a4 4 0 0 0-4-4h-16a4 4 0 0 1 0-8h16a12 12 0 0 1 12 12m-64-8a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M44 80V56a12 12 0 0 1 12-12h16a4 4 0 0 1 0 8H56a4 4 0 0 0-4 4v24a4 4 0 0 1-8 0" />
      </G>
    </Svg>
  );
};