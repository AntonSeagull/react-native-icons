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

export const LiaMousePointerSolid = (props: IconProps) => {
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
        <Path d="M9 2.594v25.562l1.656-1.375 4.031-3.375 2.032 4.032.437.906.907-.469 3.093-1.594.875-.437-.437-.907-1.844-3.625 5.063-.625 2.03-.25L25.407 19 10.72 4.281Zm2 4.844 11.563 11.53-4.5.532-1.407.188.657 1.28 2.062 4-1.312.688-2.157-4.312-.594-1.125-.968.812L11 23.844Z" />
      </G>
    </Svg>
  );
};