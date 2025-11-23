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

export const TbZoomOutArea = (props: IconProps) => {
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
        <Path d="M13 15h4M10 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0M22 22l-3-3M6 18H5a2 2 0 0 1-2-2v-1M3 11v-1M3 6V5a2 2 0 0 1 2-2h1M10 3h1M15 3h1a2 2 0 0 1 2 2v1" />
      </G>
    </Svg>
  );
};