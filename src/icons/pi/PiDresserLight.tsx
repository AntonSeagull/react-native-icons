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

export const PiDresserLight = (props: IconProps) => {
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
        <Path d="M142 192a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h16a6 6 0 0 1 6 6M120 70h16a6 6 0 0 0 0-12h-16a6 6 0 0 0 0 12m16 52h-16a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m78-82v176a14 14 0 0 1-14 14H56a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14h144a14 14 0 0 1 14 14M54 154h148v-52H54Zm0-114v50h148V40a2 2 0 0 0-2-2H56a2 2 0 0 0-2 2m148 176v-50H54v50a2 2 0 0 0 2 2h144a2 2 0 0 0 2-2" />
      </G>
    </Svg>
  );
};