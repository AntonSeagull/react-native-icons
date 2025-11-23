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

export const TfiRss = (props: IconProps) => {
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
        <Path d="M9.969 14h-1c0-3.233-2.678-5.863-5.969-5.863v-1c3.843 0 6.969 3.079 6.969 6.863M3 3.5v1c5.327 0 9.5 4.173 9.5 9.5h1C13.5 8.112 8.888 3.5 3 3.5m3 9.001a1.5 1.5 0 1 0-3.002 0A1.5 1.5 0 0 0 6 12.5m-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M17 15.5v-14c0-.827-.673-1.5-1.5-1.5h-14C.673 0 0 .673 0 1.5v14c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5M15.5 1a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5z" />
      </G>
    </Svg>
  );
};