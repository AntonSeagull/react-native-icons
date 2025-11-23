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

export const RiProjectorLine = (props: IconProps) => {
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
        <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.126 9H4v7h16v-7h-1.126a4.002 4.002 0 0 1-7.748 0m0-2a4.002 4.002 0 0 1 7.748 0H20V5H4v5zM15 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 2h2v2H6z" />
      </G>
    </Svg>
  );
};