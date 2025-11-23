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

export const TbTableFilled = (props: IconProps) => {
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
        <Path d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a3 3 0 0 1-2.995-2.824L3 18v-6a1 1 0 0 1 1-1M21 12v6a3 3 0 0 1-2.824 2.995L18 21h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1M18 3a3 3 0 0 1 2.995 2.824L21 6v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 4v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a3 3 0 0 1 2.824-2.995L6 3h2a1 1 0 0 1 1 1" />
      </G>
    </Svg>
  );
};