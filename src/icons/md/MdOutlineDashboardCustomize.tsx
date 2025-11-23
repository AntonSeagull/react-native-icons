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

export const MdOutlineDashboardCustomize = (props: IconProps) => {
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
        <Path d="M3 11h8V3H3zm2-6h4v4H5zM13 3v8h8V3zm6 6h-4V5h4zM3 21h8v-8H3zm2-6h4v4H5zM18 13h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
      </G>
    </Svg>
  );
};