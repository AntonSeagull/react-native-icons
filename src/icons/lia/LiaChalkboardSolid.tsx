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

export const LiaChalkboardSolid = (props: IconProps) => {
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
        <Path d="M5 7v16H3v2h26v-2h-2V7Zm2 2h18v14H7Zm14.281 3.281L17 16.562l-3.281-3.28-.719-.688-.719.687-3 3 1.438 1.438L13 15.437l3.281 3.282.719.687.719-.687 5-5ZM20 20l-1 1 1 1h4v-2Z" />
      </G>
    </Svg>
  );
};