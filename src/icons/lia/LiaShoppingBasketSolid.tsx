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

export const LiaShoppingBasketSolid = (props: IconProps) => {
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
        <Path d="M16 3.094 7.094 12H2v6h1.25l2.781 9.281.219.719h19.5l.219-.719L28.75 18H30v-6h-5.094Zm0 2.844L22.063 12H9.938ZM4 14h24v2h-.75l-.219.719L24.25 26H7.75l-2.781-9.281L4.75 16H4Zm7 3v7h2v-7Zm4 0v7h2v-7Zm4 0v7h2v-7Z" />
      </G>
    </Svg>
  );
};