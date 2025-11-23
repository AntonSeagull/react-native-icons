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

export const LiaChevronLeftSolid = (props: IconProps) => {
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
        <Path d="m19.75 2.594-.719.687-12 12-.687.719.687.719 12 12 .719.687.719-.687 3.593-3.625.688-.688-.687-.718L16.375 16l7.688-7.687.687-.72-.687-.687-3.594-3.625Zm0 2.844 2.188 2.187-7.688 7.656-.719.719.719.719 7.688 7.656-2.188 2.188L9.188 16Z" />
      </G>
    </Svg>
  );
};