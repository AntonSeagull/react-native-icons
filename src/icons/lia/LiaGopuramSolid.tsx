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

export const LiaGopuramSolid = (props: IconProps) => {
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
        <Path d="M9 5v5H8v4H6v6H4v7h5v-7h1v-6h1v-4h2v4h-1v6h-1v7h2v-2a3 3 0 1 1 6 0v2h2v-7h-1v-6h-1v-4h2v4h1v6h1v7h5v-7h-2v-6h-2v-4h-1V5h-2v2h-2V5h-2v2h-2V5h-2v2h-2V5zm7 6a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1m0 5a2 2 0 0 1 2 2v2h-4v-2a2 2 0 0 1 2-2" />
      </G>
    </Svg>
  );
};