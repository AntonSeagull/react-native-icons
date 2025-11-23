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

export const TbSteam = (props: IconProps) => {
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
        <Path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3" />
      </G>
    </Svg>
  );
};