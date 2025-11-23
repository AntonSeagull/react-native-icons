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

export const TbEaseInOutControlPoints = (props: IconProps) => {
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
        <Path d="M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 20h-2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 4h2M14 4h-2M12 20h-2M3 20c8 0 10-16 18-16" />
      </G>
    </Svg>
  );
};