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

export const PiChatsTeardropLight = (props: IconProps) => {
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
        <Path d="M168.16 74.42A78 78 0 0 0 18 104v64a14 14 0 0 0 14 14h56a78.15 78.15 0 0 0 72 48h64a14 14 0 0 0 14-14v-64a78 78 0 0 0-69.84-77.58M30 168v-64a66 66 0 1 1 66 66H32a2 2 0 0 1-2-2m196 48a2 2 0 0 1-2 2h-64a66.13 66.13 0 0 1-58.89-36.19 77.92 77.92 0 0 0 71-94.68A66 66 0 0 1 226 152Z" />
      </G>
    </Svg>
  );
};