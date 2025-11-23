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

export const LuShredder = (props: IconProps) => {
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
        <Path d="M10 22v-5M14 19v-2M14 2v4a2 2 0 0 0 2 2h4M18 20v-3M2 13h20" />
        <Path d="M20 13V7l-5-5H6a2 2 0 0 0-2 2v9M6 20v-3" />
      </G>
    </Svg>
  );
};