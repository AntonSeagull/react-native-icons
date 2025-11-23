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

export const LiaCodepen = (props: IconProps) => {
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
        <Path d="m16 2.844-.562.375-12 8.031-.438.281v8.938l.438.281 12 8.031.562.375.563-.375 12-8.031.437-.281V11.53l-.437-.281-12-8.031Zm-1 3.062v5.438l-5.156 3.469-4.031-2.72Zm2 0 9.188 6.188-4.032 2.719L17 11.343Zm-1 7.188L20.344 16 16 18.906 11.656 16Zm-11 .844L8.063 16 5 18.063Zm22 0v4.124L23.938 16Zm-17.125 3.25L15 20.656v5.438l-9.187-6.188Zm12.25 0 4.063 2.718L17 26.094v-5.438Z" />
      </G>
    </Svg>
  );
};