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

export const LiaGg = (props: IconProps) => {
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
        <Path d="m12 6.594-.719.687-8 8-.687.719.687.719 8 8 .719.687.719-.687 4-4 .687-.719-.687-.719-5-5-1.438 1.438L14.562 20 12 22.563 5.438 16 12 9.438l1.281 1.28 1.438-1.437-2-2Zm8 0-.719.687-4 4-.687.719.687.719 5 5 1.438-1.438L17.437 12 20 9.438 26.563 16 20 22.563l-1.281-1.282-1.438 1.438 2 2 .719.687.719-.687 8-8 .687-.719-.687-.719-8-8Z" />
      </G>
    </Svg>
  );
};