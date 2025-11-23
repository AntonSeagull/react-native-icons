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

export const TbShoppingCartCancel = (props: IconProps) => {
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
        <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M12 17H6V3H4" />
        <Path d="m6 5 14 1-.857 5.998M15.5 13H6M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 21l4-4" />
      </G>
    </Svg>
  );
};