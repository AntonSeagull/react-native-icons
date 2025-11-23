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

export const TbSkateboard = (props: IconProps) => {
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
        <Path d="M5 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2-1" />
      </G>
    </Svg>
  );
};