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

export const FcPodiumWithSpeaker = (props: IconProps) => {
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
        <Circle cx={24} cy={11} r={6} fill="#FFB74D" />
        <Path fill="#607D8B" d="M36 26.1S32.7 19 24 19s-12 7.1-12 7.1V30h24z" />
        <Path fill="#B0BEC5" d="M41 25H7l-1 4 5 3-2-3h30l-2 3 5-3z" />
        <Path fill="#78909C" d="M9 29h30l-4 12H13z" />
      </G>
    </Svg>
  );
};