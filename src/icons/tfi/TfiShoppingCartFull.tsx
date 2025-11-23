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

export const TfiShoppingCartFull = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2.75 12.5c-.965 0-1.75.785-1.75 1.75S1.785 16 2.75 16s1.75-.785 1.75-1.75-.785-1.75-1.75-1.75m0 2.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75.75.337.75.75-.337.75-.75.75m8.5-2.5c-.965 0-1.75.785-1.75 1.75S10.285 16 11.25 16 13 15.215 13 14.25s-.785-1.75-1.75-1.75m0 2.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75.75.337.75.75-.337.75-.75.75m2.12-13-.301 2H-.074l1.117 8.036h11.914L14 4.536 14.231 3H17V2zm-1.284 9.036H1.914L1.074 5h11.852zM11 10H3V6.031h1V9h6V6.03h1zM4 2.969H3V1h8v1.906h-1V2H4z" />
      </G>
    </Svg>
  );
};