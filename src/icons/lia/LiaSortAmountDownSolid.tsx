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

export const LiaSortAmountDownSolid = (props: IconProps) => {
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
        <Path d="M4 5v2h12V5Zm17 0v18.688l-2.594-2.594L17 22.5l4.281 4.313.719.687.719-.687L27 22.5l-1.406-1.406L23 23.687V5ZM4 9v2h10V9Zm0 4v2h8v-2Zm0 4v2h6v-2Zm0 4v2h4v-2Zm0 4v2h2v-2Z" />
      </G>
    </Svg>
  );
};