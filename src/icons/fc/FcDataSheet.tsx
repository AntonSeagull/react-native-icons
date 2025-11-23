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

export const FcDataSheet = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#90CAF9" d="M39 16v7h-6v-7h-2v7h-6v-7h-2v7h-7v2h7v6h-7v2h7v6h-7v2h25V16zm0 9v6h-6v-6zm-14 0h6v6h-6zm0 8h6v6h-6zm8 6v-6h6v6z" />
        <Path fill="#00BCD4" d="M40 8H8v32h8V16h24z" />
        <Path fill="#0097A7" d="M7 7v34h10V17h24V7zm2 16v-6h6v6zm6 2v6H9v-6zm2-16h6v6h-6zm8 0h6v6h-6zM15 9v6H9V9zM9 39v-6h6v6zm30-24h-6V9h6z" />
      </G>
    </Svg>
  );
};