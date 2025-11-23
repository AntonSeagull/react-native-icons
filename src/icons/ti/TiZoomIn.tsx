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

export const TiZoomIn = (props: IconProps) => {
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
        <Path d="M13 11h-2V9a.5.5 0 0 0-1 0v2H8a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1m5.432 3.97-.536-.537-.749-.75c.227-.688.354-1.42.354-2.183 0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.763 0 1.496-.127 2.184-.354l.75.749 1.512 1.51.061.061.064.055a3.28 3.28 0 0 0 2.104.784 3.134 3.134 0 0 0 3.13-3.131c0-.84-.328-1.628-.924-2.218zM5.5 11.5c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5" />
      </G>
    </Svg>
  );
};