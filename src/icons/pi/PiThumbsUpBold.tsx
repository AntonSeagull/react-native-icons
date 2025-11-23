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

export const PiThumbsUpBold = (props: IconProps) => {
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
        <Path d="M237 77.47A28 28 0 0 0 216 68h-52V56a44.05 44.05 0 0 0-44-44 12 12 0 0 0-10.73 6.63L72.58 92H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h172a28 28 0 0 0 27.78-24.53l12-96a28 28 0 0 0-6.78-22M36 116h32v80H36Zm184-19.5-12 96a4 4 0 0 1-4 3.5H92v-89.17l34.82-69.63A20 20 0 0 1 140 56v24a12 12 0 0 0 12 12h64a4 4 0 0 1 4 4.5" />
      </G>
    </Svg>
  );
};