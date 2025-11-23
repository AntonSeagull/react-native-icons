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

export const PiStairsLight = (props: IconProps) => {
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
        <Path d="M200 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m-48 116h50v28h-92v-28Zm6-12v-28h44v28ZM56 38h144a2 2 0 0 1 2 2v50h-50a6 6 0 0 0-6 6v34h-42a6 6 0 0 0-6 6v34H54V40a2 2 0 0 1 2-2m144 180H56a2 2 0 0 1-2-2v-34h148v34a2 2 0 0 1-2 2" />
      </G>
    </Svg>
  );
};