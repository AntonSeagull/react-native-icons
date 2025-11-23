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

export const RiChatThreadFill = (props: IconProps) => {
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
        <Path d="m2 22 5.291-1.176A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.703.425 3.306 1.176 4.709zM15.449 7l-.175 2H17v2h-1.901l-.175 2H17v2h-2.251l-.175 2h-2.008l.175-2h-2.008l-.175 2H8.552l.175-2H7v-2h1.9l.176-2H7V9h2.25l.176-2h2.007l-.175 2h2.008l.175-2zm-4.366 4-.175 2h2.008l.175-2z" />
      </G>
    </Svg>
  );
};