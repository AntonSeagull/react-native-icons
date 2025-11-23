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

export const TbMassage = (props: IconProps) => {
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
        <Path d="M3 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 22l4-2v-3h12M11 20h9M8 14l3-2 1-4c3 1 3 4 3 6" />
      </G>
    </Svg>
  );
};