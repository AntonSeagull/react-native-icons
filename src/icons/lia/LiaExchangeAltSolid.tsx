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

export const LiaExchangeAltSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M22.188 2.281 20.78 3.72 25.063 8H4v2h21.063l-4.282 4.281 1.407 1.438L28.906 9Zm-12.375 14L3.093 23l6.72 6.719 1.406-1.438L6.938 24H28v-2H6.938l4.28-4.281Z" />
      </G>
    </Svg>
  );
};