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

export const PiChatTeardropDotsThin = (props: IconProps) => {
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
        <Path d="M140 128a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-52-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8m88 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8m52 4a96.11 96.11 0 0 1-96 96H48a12 12 0 0 1-12-12v-84a96 96 0 0 1 192 0m-8 0a88 88 0 0 0-176 0v84a4 4 0 0 0 4 4h84a88.1 88.1 0 0 0 88-88" />
      </G>
    </Svg>
  );
};