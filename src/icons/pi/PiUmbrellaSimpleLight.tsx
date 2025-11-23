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

export const PiUmbrellaSimpleLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M238 126.79A110.43 110.43 0 0 0 53.11 55.22a109.5 109.5 0 0 0-35.06 71.57A14 14 0 0 0 32 142h90v58a30 30 0 0 0 60 0 6 6 0 0 0-12 0 18 18 0 0 1-36 0v-58h90a14 14 0 0 0 14-15.21m-12.49 2.56a2 2 0 0 1-1.51.65H32a2 2 0 0 1-1.49-.65 2 2 0 0 1-.53-1.56 98.43 98.43 0 0 1 164.78-63.74A97.5 97.5 0 0 1 226 127.79a2 2 0 0 1-.54 1.56Z" />
      </G>
    </Svg>
  );
};