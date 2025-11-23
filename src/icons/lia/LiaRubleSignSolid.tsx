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

export const LiaRubleSignSolid = (props: IconProps) => {
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
        <Path d="M11 6v10H9v2h2v2H9v2h2v4h2v-4h5v-2h-5v-2h6c3.3 0 6-2.7 6-6s-2.7-6-6-6Zm2 2h6c2.219 0 4 1.781 4 4s-1.781 4-4 4h-6Z" />
      </G>
    </Svg>
  );
};