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

export const LiaKeySolid = (props: IconProps) => {
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
        <Path d="M20 3c-4.945 0-9 4.055-9 9 0 .52.086.977.156 1.438L3.281 21.28 3 21.594V29h7v-3h3v-3h3v-2.969c1.18.578 2.555.969 4 .969 4.945 0 9-4.055 9-9s-4.055-9-9-9m0 2c3.855 0 7 3.145 7 7s-3.145 7-7 7a7.36 7.36 0 0 1-3.406-.875l-.25-.125H14v3h-3v3H8v3H5v-4.562l7.906-7.938.375-.344-.094-.531C13.087 13.023 13 12.488 13 12c0-3.855 3.145-7 7-7m2 3a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4" />
      </G>
    </Svg>
  );
};