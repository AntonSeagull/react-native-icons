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

export const VscCircleLargeFilled = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 1a6.8 6.8 0 0 1 1.86.253 6.9 6.9 0 0 1 3.083 1.805 6.9 6.9 0 0 1 1.804 3.083Q15 7.036 15 8c0 .964-.084 1.262-.253 1.86a7 7 0 0 1-.704 1.674 7.16 7.16 0 0 1-2.516 2.509 7 7 0 0 1-1.668.71A7 7 0 0 1 8 15a7 7 0 0 1-1.86-.246 7 7 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.3 7.3 0 0 1-1.094-1.415 7 7 0 0 1-.71-1.675A7 7 0 0 1 1 8q0-.964.246-1.86a7 7 0 0 1 .711-1.667 7.16 7.16 0 0 1 2.509-2.516 7 7 0 0 1 1.675-.704A6.8 6.8 0 0 1 8 1" />
      </G>
    </Svg>
  );
};