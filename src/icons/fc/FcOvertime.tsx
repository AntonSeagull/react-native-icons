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

export const FcOvertime = (props: IconProps) => {
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
        <Path fill="#CFD8DC" d="M12 40V20h32v20c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4" />
        <Path fill="#78909C" d="M44 16v6H12v-6c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4" />
        <Circle cx={37} cy={16} r={3} />
        <Circle cx={20} cy={16} r={3} />
        <Path d="M37 10c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2M20 10c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2" />
        <Path fill="#90A4AE" d="M32 34h4v4h-4zM26 34h4v4h-4zM20 34h4v4h-4zM32 28h4v4h-4zM26 28h4v4h-4zM20 28h4v4h-4z" />
        <Circle cx={16} cy={15} r={12} fill="#F44336" />
        <Circle cx={16} cy={15} r={9} fill="#eee" />
        <Path d="M15 8h2v7h-2z" />
        <Path d="m20.518 18.1-1.343 1.344-3.818-3.818 1.344-1.343z" />
        <Circle cx={16} cy={15} r={1.5} />
      </G>
    </Svg>
  );
};