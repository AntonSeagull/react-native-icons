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

export const TbBrandPicsart = (props: IconProps) => {
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
        <Path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9" />
        <Path d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M5 9v11a2 2 0 1 0 4 0v-4.5" />
      </G>
    </Svg>
  );
};