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

export const TbFountainOff = (props: IconProps) => {
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
        <Path d="M9 16v-5a2 2 0 1 0-4 0M15 16v-1m0-4a2 2 0 1 1 4 0M12 16v-4m0-4V6a3 3 0 0 1 6 0" />
        <Path d="M7.451 3.43A3 3 0 0 1 12 6M20 16h1v1m-.871 3.114A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3v-2h13M3 3l18 18" />
      </G>
    </Svg>
  );
};