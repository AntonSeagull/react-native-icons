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

export const TbClockCancel = (props: IconProps) => {
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
        <Path d="M20.997 12.25a9 9 0 1 0-8.718 8.745M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 21l4-4" />
        <Path d="M12 7v5l2 2" />
      </G>
    </Svg>
  );
};