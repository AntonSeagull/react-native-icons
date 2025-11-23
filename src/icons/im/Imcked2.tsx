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

export const Imcked2 = (props: IconProps) => {
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
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5 7c-.552 0-1-.672-1-1.5S4.448 4 5 4s1 .672 1 1.5S5.552 7 5 7m3 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 13m3-6c-.552 0-1-.672-1-1.5S10.448 4 11 4s1 .672 1 1.5S11.552 7 11 7" />
      </G>
    </Svg>
  );
};