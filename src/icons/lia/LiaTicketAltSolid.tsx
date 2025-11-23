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

export const LiaTicketAltSolid = (props: IconProps) => {
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
        <Path d="M2 7v7h1c1.191 0 2 .809 2 2s-.809 2-2 2H2v7h28v-7h-1c-1.191 0-2-.809-2-2s.809-2 2-2h1V7Zm2 2h24v3.188c-1.715.449-3 1.957-3 3.812s1.285 3.363 3 3.813V23H4v-3.187c1.715-.45 3-1.958 3-3.813s-1.285-3.363-3-3.812Z" />
      </G>
    </Svg>
  );
};