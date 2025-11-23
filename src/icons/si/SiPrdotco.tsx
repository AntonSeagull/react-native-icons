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

export const SiPrdotco = (props: IconProps) => {
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
        <Path d="M12 4.67a7.3 7.3 0 0 1 5.183 2.147 7.27 7.27 0 0 1 1.898 3.285l1.79-1.79a1.832 1.832 0 0 1 2.592 2.59l-6.28 6.281A7.3 7.3 0 0 1 12 19.33a7.3 7.3 0 0 1-5.183-2.147 7.3 7.3 0 0 1-1.898-3.285l-1.791 1.79a1.832 1.832 0 1 1-2.591-2.59c2.092-2.094 4.19-4.19 5.95-5.951C8.183 5.287 10.258 4.672 12 4.67m2.592 4.738a3.666 3.666 0 1 0-5.184 5.185 3.666 3.666 0 0 0 5.184-5.185" />
      </G>
    </Svg>
  );
};