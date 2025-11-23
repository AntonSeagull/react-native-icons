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

export const LuTextSelect = (props: IconProps) => {
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
        <Path d="M14 21h1M14 3h1M19 3a2 2 0 0 1 2 2M21 14v1M21 19a2 2 0 0 1-2 2M21 9v1M3 14v1M3 9v1M5 21a2 2 0 0 1-2-2M5 3a2 2 0 0 0-2 2M7 12h10M7 16h6M7 8h8M9 21h1M9 3h1" />
      </G>
    </Svg>
  );
};