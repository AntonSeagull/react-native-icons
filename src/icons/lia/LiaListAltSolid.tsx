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

export const LiaListAltSolid = (props: IconProps) => {
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
        <Path d="M10.281 5.281 7 8.563 5.719 7.28 4.28 8.72l2 2 .719.687.719-.687 4-4ZM15 7v2h13V7Zm-4.719 6.281L7 16.562l-1.281-1.28-1.438 1.437 2 2 .719.687.719-.687 4-4ZM15 15v2h13v-2Zm-4.719 6.281L7 24.563 5.719 23.28 4.28 24.72l2 2 .719.687.719-.687 4-4ZM15 23v2h13v-2Z" />
      </G>
    </Svg>
  );
};