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

export const FcPodiumWithAudience = (props: IconProps) => {
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
        <Path fill="#B0BEC5" d="M41 12H7l-1 4 5 3-2-3h30l-2 3 5-3z" />
        <Path fill="#78909C" d="M9 16h30l-4 12H13z" />
        <Circle cx={24} cy={28} r={4} fill="#FFB74D" />
        <Circle cx={36} cy={28} r={4} fill="#FFB74D" />
        <Circle cx={12} cy={28} r={4} fill="#FFB74D" />
        <Circle cx={18} cy={37} r={5} fill="#FFB74D" />
        <Circle cx={30} cy={37} r={5} fill="#FFB74D" />
      </G>
    </Svg>
  );
};