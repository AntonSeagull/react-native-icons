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

export const RiBoxingFill = (props: IconProps) => {
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
        <Path d="m9.501 11 .144.007a1.5 1.5 0 0 1 1.35 1.348L11 12.5l-.007.145a1.5 1.5 0 0 1-1.349 1.348L9.501 14h-3.5v2h3.5c1.7 0 3.117-1.212 3.434-2.819l.03-.18L19.001 13c.711 0 1.388-.149 2-.416V17a3 3 0 0 1-2 2.829V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-1.17a3 3 0 0 1-2-2.83v-4a2 2 0 0 1 2-2zm12.5-3.5V8l-.005.176a3 3 0 0 1-2.819 2.819l-.176.005h-6.337A3.5 3.5 0 0 0 9.71 9.006L9.5 9h-4.5c-.729 0-1.412.195-2.001.536L3.001 6a4 4 0 0 1 4-4h9.5a5.5 5.5 0 0 1 5.5 5.5" />
      </G>
    </Svg>
  );
};