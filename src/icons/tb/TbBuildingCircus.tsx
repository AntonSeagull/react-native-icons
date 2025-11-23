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

export const TbBuildingCircus = (props: IconProps) => {
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
        <Path d="M4 11h16M12 6.5c0 1-5 4.5-8 4.5M12 6.5c0 1 5 4.5 8 4.5M6 11q-.5 8-2 10h4c1 0 4-4 4-9v-1M18 11q.5 8 2 10h-4c-1 0-4-4-4-9v-1" />
        <Path d="M12 7V3l2 1h-2" />
      </G>
    </Svg>
  );
};