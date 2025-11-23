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

export const PiChatTeardropText = (props: IconProps) => {
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
        <Path d="M172 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h68a8 8 0 0 1 8 8m-8 24H96a8 8 0 0 0 0 16h68a8 8 0 0 0 0-16m68-12a100.11 100.11 0 0 1-100 100H48a16 16 0 0 1-16-16v-84a100 100 0 0 1 200 0m-16 0a84 84 0 0 0-168 0v84h84a84.09 84.09 0 0 0 84-84" />
      </G>
    </Svg>
  );
};