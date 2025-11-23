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

export const LiaSortSolid = (props: IconProps) => {
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
        <Path d="m16 3.594-.719.687-8 8L5.594 14h20.812l-1.687-1.719-8-8Zm0 2.844L21.563 12H10.438ZM5.594 18l1.687 1.719 8 8 .719.687.719-.687 8-8L26.406 18Zm4.844 2h11.125L16 25.563Z" />
      </G>
    </Svg>
  );
};