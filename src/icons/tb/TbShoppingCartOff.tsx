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

export const TbShoppingCartOff = (props: IconProps) => {
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
        <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 17a2 2 0 1 0 2 2" />
        <Path d="M17 17H6V6M9.239 5.231 20 6l-1 7h-2m-4 0H6M3 3l18 18" />
      </G>
    </Svg>
  );
};