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

export const LiaFilterSolid = (props: IconProps) => {
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
        <Path d="M5 4v2.344l.219.281L13 16.344V28l1.594-1.187 4-3L19 23.5v-7.156l7.781-9.719.219-.281V4Zm2.281 2H24.72l-7.188 9H14.47ZM15 17h2v5.5L15 24Z" />
      </G>
    </Svg>
  );
};