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

export const PiPaintBrushBroadThin = (props: IconProps) => {
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
        <Path d="M216 28H72a36 36 0 0 0-36 36v72a20 20 0 0 0 20 20h48a4 4 0 0 1 4 4.52l-7.9 46.81a4 4 0 0 0-.06.67 28 28 0 0 0 56 0 4 4 0 0 0-.06-.67L148 160.52a4 4 0 0 1 4-4.52h48a20 20 0 0 0 20-20V32a4 4 0 0 0-4-4M72 36h108v44a4 4 0 0 0 8 0V36h24v72H44V64a28 28 0 0 1 28-28m128 112h-48a12 12 0 0 0-11.88 13.7s0 .06 0 .1l7.88 46.52a20 20 0 0 1-40 0l7.86-46.52v-.1A12 12 0 0 0 104 148H56a12 12 0 0 1-12-12v-20h168v20a12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};