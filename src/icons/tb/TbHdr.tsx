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

export const TbHdr = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 16V8M7 8v8M3 12h4M10 8v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM17 12h2a2 2 0 1 0 0-4h-2v8m4 0-3-4" />
      </G>
    </Svg>
  );
};