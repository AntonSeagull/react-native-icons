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

export const TbRewindForward15 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m17 9 3-3-3-3" />
        <Path d="M9 18A6 6 0 1 1 9 6h11M16 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3M13 14v6" />
      </G>
    </Svg>
  );
};