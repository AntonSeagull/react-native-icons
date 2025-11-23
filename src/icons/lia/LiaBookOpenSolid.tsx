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

export const LiaBookOpenSolid = (props: IconProps) => {
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
        <Path d="M3 6v19h10c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h10V6H19a4 4 0 0 0-3 1.36A4 4 0 0 0 13 6Zm2 2h8c1.102 0 2 .898 2 2h2c0-1.102.898-2 2-2h8v15h-8a4 4 0 0 0-3 1.36A4 4 0 0 0 13 23H5Zm10 4v2h2v-2Zm0 4v2h2v-2Zm0 4v2h2v-2Z" />
      </G>
    </Svg>
  );
};