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

export const LiaHandsSolid = (props: IconProps) => {
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
        <Path d="M3 5v11.406l.281.313L9 22.437V28h6v-6c.004-.055.146-3.155-2.437-4.812-.008-.005.007-.028 0-.032-.008-.004-.024.004-.032 0-1.184-.773-2.406-1.405-3.25-2.062C8.431 14.434 8 13.887 8 13H6c0 1.617.945 2.844 2.031 3.688s2.348 1.465 3.406 2.156h.032C13.07 19.848 13 21.969 13 21.969V26h-2v-4.406l-.281-.313L5 15.563V5zm24 0v10.563l-5.719 5.718-.281.313V26h-2v-4.062s-.07-2.09 1.531-3.094h.032c1.055-.691 2.32-1.314 3.406-2.157S26 14.618 26 13h-2c0 .887-.43 1.434-1.281 2.094-.844.656-2.066 1.288-3.25 2.062-.008.004-.024-.004-.032 0v.032C16.876 18.828 16.997 21.895 17 22v6h6v-5.562l5.719-5.72.281-.312V5z" />
      </G>
    </Svg>
  );
};