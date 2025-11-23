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

export const TfiUnlock = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.5 10.972a.99.99 0 0 1-.5.846v2.154H8v-2.153a.98.98 0 0 1-.5-.847 1 1 0 1 1 2 0m5.494-2.512v7.08c0 .827-.673 1.5-1.5 1.5H3.506c-.827 0-1.5-.673-1.5-1.5V8.46c0-.827.673-1.5 1.5-1.5H12.5V4.972c0-2.206-1.794-4-4-4s-4 1.794-4 4h-1c0-2.757 2.243-5 5-5s5 2.243 5 5V6.96a1.503 1.503 0 0 1 1.494 1.5m-1 0a.5.5 0 0 0-.5-.5H3.506a.5.5 0 0 0-.5.5v7.08a.5.5 0 0 0 .5.5h9.988a.5.5 0 0 0 .5-.5z" />
      </G>
    </Svg>
  );
};