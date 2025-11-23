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

export const LiaShoppingBagSolid = (props: IconProps) => {
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
        <Path d="M16 3c-2.746 0-5 2.254-5 5v1H6.063L6 9.938l-1 18L4.938 29h22.125L27 27.938l-1-18L25.938 9H21V8c0-2.746-2.254-5-5-5m0 2a3 3 0 0 1 3 3v1h-6V8a3 3 0 0 1 3-3m-8.062 6H11v3h2v-3h6v3h2v-3h3.063l.875 16H7.063Z" />
      </G>
    </Svg>
  );
};