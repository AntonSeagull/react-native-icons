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

export const PiQueueLight = (props: IconProps) => {
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
        <Path d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m102 58H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m110-26a6 6 0 0 1-2.82 5.09l-64 40A6 6 0 0 1 170 200v-80a6 6 0 0 1 9.18-5.09l64 40A6 6 0 0 1 246 160m-17.32 0L182 130.83v58.34Z" />
      </G>
    </Svg>
  );
};