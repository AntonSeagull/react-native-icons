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

export const SiBluetooth = (props: IconProps) => {
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
        <Path d="M12 0C6.76 0 3.148 2.49 3.148 12S6.76 24 12 24s8.852-2.49 8.852-12S17.24 0 12 0m-.777 1.682 6.214 6.215L13.335 12l4.104 4.104-6.215 6.214v-8.193l-3.418 3.42-1.243-1.244L10.853 12l-4.29-4.3 1.243-1.245 3.418 3.42zm1.748 4.244v3.969l1.984-1.985zm0 8.181v3.967l1.984-1.984z" />
      </G>
    </Svg>
  );
};