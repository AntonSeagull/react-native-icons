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

export const PiChatTeardropLight = (props: IconProps) => {
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
        <Path d="M132 26a98.11 98.11 0 0 0-98 98v84a14 14 0 0 0 14 14h84a98 98 0 0 0 0-196m0 184H48a2 2 0 0 1-2-2v-84a86 86 0 1 1 86 86" />
      </G>
    </Svg>
  );
};