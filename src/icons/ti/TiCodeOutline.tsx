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

export const TiCodeOutline = (props: IconProps) => {
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
        <Path d="M7.828 19a2.98 2.98 0 0 1-2.121-.879L.586 13l5.121-5.121C6.84 6.745 8.819 6.745 9.95 7.88a3 3 0 0 1-.001 4.241L9.071 13l.878.879A3.002 3.002 0 0 1 7.828 19m-4.414-6 3.707 3.707c.38.379 1.039.377 1.413.001a1 1 0 0 0 .001-1.415L6.243 13l2.292-2.293a1 1 0 0 0 0-1.414 1.023 1.023 0 0 0-1.414 0zm12.758 6a3.002 3.002 0 0 1-2.121-5.121l.878-.879-.878-.879a3 3 0 0 1 0-4.242c1.129-1.133 3.109-1.134 4.242 0L23.414 13l-5.121 5.121a2.98 2.98 0 0 1-2.121.879m-.001-10a1.001 1.001 0 0 0-.706 1.707L17.757 13l-2.292 2.293a1 1 0 0 0 0 1.414 1.02 1.02 0 0 0 1.414 0L20.586 13l-3.707-3.707A1 1 0 0 0 16.171 9" />
      </G>
    </Svg>
  );
};