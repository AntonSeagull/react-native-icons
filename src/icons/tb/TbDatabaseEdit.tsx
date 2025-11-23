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

export const TbDatabaseEdit = (props: IconProps) => {
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
        <Path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
        <Path d="M4 6v6c0 1.657 3.582 3 8 3q.718 0 1.402-.046M20 12V6" />
        <Path d="M4 12v6c0 1.526 3.04 2.786 6.972 2.975M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
      </G>
    </Svg>
  );
};