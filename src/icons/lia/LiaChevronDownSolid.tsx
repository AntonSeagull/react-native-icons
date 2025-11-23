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

export const LiaChevronDownSolid = (props: IconProps) => {
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
        <Path d="m6.906 6.594-.718.687-3.907 3.907-.687.718L16 26.313l14.406-14.407-.687-.719-3.907-3.906-.718-.687L16 15.687Zm-.031 2.843 8.406 8.376.719.687.719-.687 8.406-8.375 2.438 2.437L16 23.469 4.438 11.875Z" />
      </G>
    </Svg>
  );
};