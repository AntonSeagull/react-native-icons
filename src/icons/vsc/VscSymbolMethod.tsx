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

export const VscSymbolMethod = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m13.51 4-5-3h-1l-5 3-.49.86v6l.49.85 5 3h1l5-3 .49-.85v-6zm-6 9.56-4.5-2.7V5.7l4.5 2.45zM3.27 4.7l4.74-2.84 4.74 2.84-4.74 2.59zm9.74 6.16-4.5 2.7V8.15l4.5-2.45z" />
      </G>
    </Svg>
  );
};