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

export const LiaPuzzlePieceSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 3c-2.21 0-4 1.79-4 4H7v5c-2.21 0-4 1.79-4 4s1.79 4 4 4v5h6c0 2.21 1.79 4 4 4s4-1.79 4-4h6v-7h-2c-1.191 0-2-.809-2-2s.809-2 2-2h2V7h-6c0-2.21-1.79-4-4-4m0 2c1.191 0 2 .809 2 2v2h6v3c-2.21 0-4 1.79-4 4s1.79 4 4 4v3h-6v2c0 1.191-.809 2-2 2s-2-.809-2-2v-2H9v-5H7c-1.191 0-2-.809-2-2s.809-2 2-2h2V9h6V7c0-1.191.809-2 2-2" />
      </G>
    </Svg>
  );
};