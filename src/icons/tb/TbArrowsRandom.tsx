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

export const TbArrowsRandom = (props: IconProps) => {
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
        <Path d="M20 21h-4v-4M16 21l5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16l4-1 1 4M8 15l-3.5 6M21 5l-.5 4-4-.5M20.5 9 16 3.5" />
      </G>
    </Svg>
  );
};