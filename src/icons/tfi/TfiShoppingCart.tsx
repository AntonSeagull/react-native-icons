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

export const TfiShoppingCart = (props: IconProps) => {
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
        <Path d="M2.75 12.5c-.965 0-1.75.785-1.75 1.75S1.785 16 2.75 16s1.75-.785 1.75-1.75-.785-1.75-1.75-1.75m0 2.5a.75.75 0 0 1 0-1.5.75.75 0 0 1 0 1.5m8.5-2.5c-.965 0-1.75.785-1.75 1.75S10.285 16 11.25 16 13 15.215 13 14.25s-.785-1.75-1.75-1.75m0 2.5a.75.75 0 0 1 0-1.5.75.75 0 0 1 0 1.5m2.121-13-.302 2H-.074l1.118 8.036h11.913l1.038-7.463L14.231 3H17V2zm-.445 3-.139 1H1.213l-.139-1zM1.914 11.036 1.353 7h11.295l-.561 4.036z" />
      </G>
    </Svg>
  );
};