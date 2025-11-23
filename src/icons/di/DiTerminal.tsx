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

export const DiTerminal = (props: IconProps) => {
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
        <Path fill="#444" d="M25.716 6.696H6.42c-.888 0-1.608.72-1.608 1.608v16.08c0 .888.72 1.608 1.608 1.608h19.296c.888 0 1.608-.72 1.608-1.608V8.304c0-.888-.72-1.608-1.608-1.608M8.028 17.952l3.216-3.216-3.216-3.216 1.608-1.608 4.824 4.824-4.824 4.824zm12.864 1.608H14.46v-1.608h6.432z" />
      </G>
    </Svg>
  );
};