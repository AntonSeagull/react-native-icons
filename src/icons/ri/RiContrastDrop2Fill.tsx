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

export const RiContrastDrop2Fill = (props: IconProps) => {
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
        <Path d="M5.636 6.633 12 .269l6.364 6.364a9 9 0 1 1-12.728 0M12 3.097l-4.95 4.95A6.98 6.98 0 0 0 5 12.997h14a6.98 6.98 0 0 0-2.05-4.95z" />
      </G>
    </Svg>
  );
};