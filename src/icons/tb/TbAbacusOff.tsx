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

export const TbAbacusOff = (props: IconProps) => {
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
        <Path d="M5 5v16M19 21v-2m0-4V3M5 7h2m4 0h8M5 15h10M8 13v4M11 13v4M16 16v1M14 5v4M11 5v2M8 8v1M3 21h18M3 3l18 18" />
      </G>
    </Svg>
  );
};