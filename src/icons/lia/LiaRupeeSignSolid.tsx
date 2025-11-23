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

export const LiaRupeeSignSolid = (props: IconProps) => {
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
        <Path d="M8 5v2h4c1.703 0 3.941 1.04 4.719 3H8v2h8.969c-.309 2.61-2.996 4-4.969 4H8v2.469L18.25 27h3.125l-10.812-9H12c3.234 0 6.676-2.39 6.969-6H24v-2h-5.187c-.305-1.184-.954-2.195-1.813-3h7V5Z" />
      </G>
    </Svg>
  );
};