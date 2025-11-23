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

export const GrTrophy = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M12 15a6 6 0 0 1-6-6V1h12v8a6 6 0 0 1-6 6ZM6 3H1v4c0 2.509 1.791 4 4 4h1zm12 8h1c2.209 0 4-1.491 4-4V3h-5zM5 23h14v-4H5zm11-4a4 4 0 1 0-8 0" />
      </G>
    </Svg>
  );
};