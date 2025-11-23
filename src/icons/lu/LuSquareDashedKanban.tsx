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

export const LuSquareDashedKanban = (props: IconProps) => {
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
        <Path d="M8 7v7M12 7v4M16 7v9M5 3a2 2 0 0 0-2 2M9 3h1M14 3h1M19 3a2 2 0 0 1 2 2M21 9v1M21 14v1M21 19a2 2 0 0 1-2 2M14 21h1M9 21h1M5 21a2 2 0 0 1-2-2M3 14v1M3 9v1" />
      </G>
    </Svg>
  );
};