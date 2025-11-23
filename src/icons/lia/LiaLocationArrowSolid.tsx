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

export const LiaLocationArrowSolid = (props: IconProps) => {
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
        <Path d="m16 4.438-.906 2.187-8 19-.907 2.125 2.157-.812L16 24.063l7.656 2.875 2.157.812-.907-2.125-8-19Zm0 5.093 6.188 14.719-5.844-2.187-.344-.125-.344.125-5.844 2.187Z" />
      </G>
    </Svg>
  );
};