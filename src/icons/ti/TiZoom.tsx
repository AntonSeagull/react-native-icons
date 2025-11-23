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

export const TiZoom = (props: IconProps) => {
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
        <Path d="M13 4c-3.859 0-7 3.141-7 7 0 .763.127 1.495.354 2.183l-.749.75-.511.512-1.008 1.045a3.08 3.08 0 0 0-.891 2.185 3.134 3.134 0 0 0 3.13 3.131c.757 0 1.504-.278 2.104-.784l.064-.055.061-.061 1.512-1.51.75-.749A7 7 0 0 0 13 18c3.859 0 7-3.141 7-7s-3.141-7-7-7m0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5m0-9c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4m0 7a3.001 3.001 0 0 1 0-6 3.001 3.001 0 0 1 0 6" />
      </G>
    </Svg>
  );
};