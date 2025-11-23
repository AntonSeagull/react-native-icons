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

export const LiaChevronRightSolid = (props: IconProps) => {
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
        <Path d="m12.25 2.594-.719.687-3.594 3.625-.687.688.688.718L15.625 16l-7.687 7.688-.688.718.688.688 3.593 3.625.719.687.719-.687 12-12 .687-.719-.687-.719-12-12Zm0 2.844L22.813 16 12.25 26.563l-2.187-2.188 7.687-7.656.719-.719-.719-.719-7.687-7.656Z" />
      </G>
    </Svg>
  );
};