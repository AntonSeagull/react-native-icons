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

export const LiaDev = (props: IconProps) => {
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
        <Path d="M2 7v18h28V7zm2 2h24v14H4zm2 2v10h3c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3zm10 0c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h2v-2h-2v-2h2v-2h-2v-2h2v-2zm3.691 0 2.084 9.025a1.258 1.258 0 0 0 2.45 0L26.309 11h-2.053L23 16.44 21.744 11zM8 13h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8z" />
      </G>
    </Svg>
  );
};