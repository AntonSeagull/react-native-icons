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

export const LiaTransgenderSolid = (props: IconProps) => {
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
        <Path d="M19 3v2h3.594l-4.407 4.406A6.92 6.92 0 0 0 14 8c-3.855 0-7 3.145-7 7 0 3.516 2.617 6.418 6 6.906V25h-3v2h3v3h2v-3h3v-2h-3v-3.094c3.383-.488 6-3.39 6-6.906a6.92 6.92 0 0 0-1.406-4.187L24 6.406V10h2V3Zm-5 7c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5" />
      </G>
    </Svg>
  );
};