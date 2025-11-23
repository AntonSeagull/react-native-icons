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

export const PiHourglassSimpleLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m209.8 198-73.12-70 73.12-70 .09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09 73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM54.16 47.23A1.91 1.91 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L128 119.69 54.56 49.38a1.91 1.91 0 0 1-.4-2.15m147.68 161.54A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L128 136.31l73.44 70.31a1.91 1.91 0 0 1 .4 2.15" />
      </G>
    </Svg>
  );
};