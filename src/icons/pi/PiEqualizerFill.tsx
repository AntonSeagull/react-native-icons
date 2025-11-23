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

export const PiEqualizerFill = (props: IconProps) => {
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
        <Path d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m72 24h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16m32-48h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16M72 120H24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8m160-32h-48a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 64h-48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8" />
      </G>
    </Svg>
  );
};