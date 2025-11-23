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

export const TbOld = (props: IconProps) => {
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
        <Path d="m11 21-1-4-2-3V8" />
        <Path d="m5 14-1-3 4-3 3 2 3 .5M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 17l-2 4M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
      </G>
    </Svg>
  );
};