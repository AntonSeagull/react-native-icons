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

export const PiChatTeardropTextLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M170 112a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h68a6 6 0 0 1 6 6m-6 26H96a6 6 0 0 0 0 12h68a6 6 0 0 0 0-12m66-14a98.11 98.11 0 0 1-98 98H48a14 14 0 0 1-14-14v-84a98 98 0 0 1 196 0m-12 0a86 86 0 0 0-172 0v84a2 2 0 0 0 2 2h84a86.1 86.1 0 0 0 86-86" />
      </G>
    </Svg>
  );
};