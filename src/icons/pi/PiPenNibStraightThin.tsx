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

export const PiPenNibStraightThin = (props: IconProps) => {
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
        <Path d="M218.75 125.66a1 1 0 0 0-.1-.19L188 70.94V32a12 12 0 0 0-12-12H80a12 12 0 0 0-12 12v39l-30.66 54.47-.1.19a12 12 0 0 0 1.15 12.5l86.44 112.28a4 4 0 0 0 6.34 0l86.49-112.35a12 12 0 0 0 1.09-12.43M80 28h96a4 4 0 0 1 4 4v36H76V32a4 4 0 0 1 4-4m48 120a16 16 0 1 1 16-16 16 16 0 0 1-16 16m83.27-14.72L132 236.25v-80.59a24 24 0 1 0-8 0v80.58l-79.22-102.9a4 4 0 0 1-.4-4.06L74.35 76h107.31l30 53.28a4 4 0 0 1-.39 4" />
      </G>
    </Svg>
  );
};