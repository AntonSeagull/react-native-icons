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

export const FcPrint = (props: IconProps) => {
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
        <Path fill="#424242" d="M9 11h30v3H9z" />
        <Path fill="#616161" d="M4 25h40v-7c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4z" />
        <Path fill="#424242" d="M8 36h32c2.2 0 4-1.8 4-4v-8H4v8c0 2.2 1.8 4 4 4" />
        <Circle cx={40} cy={18} r={1} fill="#00E676" />
        <Path fill="#90CAF9" d="M11 4h26v10H11z" />
        <Path fill="#242424" d="M37.5 31h-27c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h27c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5" />
        <Path fill="#90CAF9" d="M11 31h26v11H11z" />
        <Path fill="#42A5F5" d="M11 29h26v2H11z" />
        <Path d="M16 33h17v2H16zM16 37h13v2H16z" />
      </G>
    </Svg>
  );
};