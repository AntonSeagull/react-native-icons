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

export const LiaMailBulkSolid = (props: IconProps) => {
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
        <Path d="M6 5v10H2v13h17v-4h11V11h-7V5zm2 2h13v4h-9v4H8zm6 6h14v9h-9v-7h-5zm9 2v2h3v-2zM4 17h13v1.113l-6.04 3.754a.88.88 0 0 1-.92 0L4 18.115zm13 3.469V26H4v-5.53l4.982 3.096c.468.291.994.438 1.518.438s1.049-.147 1.516-.44z" />
      </G>
    </Svg>
  );
};