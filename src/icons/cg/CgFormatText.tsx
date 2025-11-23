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

export const CgFormatText = (props: IconProps) => {
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
        <Path fill="currentColor" d="M6.5 3H3v3.5h1V4h2.5zM8.5 4V3H11v1zM13 4h2.5V3H13zM17.5 3v1H20v2.5h1V3zM21 8.5h-1V11h1zM21 13h-1v2.5h1zM21 17.5h-1V20h-2.5v1H21zM15.5 21v-1H13v1zM11 21v-1H8.5v1zM6.5 21v-1H4v-2.5H3V21zM3 15.5h1V13H3zM3 11h1V8.5H3zM11 9.5H7v-2h10v2h-4v7h-2z" />
      </G>
    </Svg>
  );
};