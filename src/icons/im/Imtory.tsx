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

export const Imtory = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10 1a7 7 0 1 1 0 14v-1.5c1.469 0 2.85-.572 3.889-1.611S15.5 9.469 15.5 8s-.572-2.85-1.611-3.889S11.469 2.5 10 2.5s-2.85.572-3.889 1.611A5.46 5.46 0 0 0 4.591 7H7.5L4 11 .5 7h2.571A7 7 0 0 1 10 1m3 6v2H9V4h2v3z" />
      </G>
    </Svg>
  );
};