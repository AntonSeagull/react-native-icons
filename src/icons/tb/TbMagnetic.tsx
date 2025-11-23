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

export const TbMagnetic = (props: IconProps) => {
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
        <Path d="M12 3v18M18 7c-.633-1.255-1.538-2-2.5-2-1.933 0-3.5 3.134-3.5 7s1.567 7 3.5 7 3.5-3.134 3.5-7v-1M6 7c.633-1.255 1.538-2 2.5-2 1.933 0 3.5 3.134 3.5 7s-1.567 7-3.5 7S5 15.866 5 12v-1" />
        <Path d="m3 13 2-2 2 2M17 13l2-2 2 2" />
      </G>
    </Svg>
  );
};