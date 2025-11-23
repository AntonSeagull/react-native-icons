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

export const RiMailForbidLine = (props: IconProps) => {
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
        <Path d="m20 7.238-7.928 7.1L4 7.216V19h7.07c.102.706.308 1.378.604 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.255a7 7 0 0 0-2-.965zM19.501 5H4.511l7.55 6.662zm-2.794 15.708a3 3 0 0 0 4.001-4.001zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001M18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10" />
      </G>
    </Svg>
  );
};