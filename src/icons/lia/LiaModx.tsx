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

export const LiaModx = (props: IconProps) => {
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
        <Path d="M7 4.242v11.992l1.855 1.213L3.89 25h12.486l1.146-1.715L25 27.765V15.44l-1.82-1.115L27.816 7H15.48l-1.132 1.607zm2 3.516 4.191 2.49 6.13 3.643-9.128 2.04L9 15.153zM16.52 9h7.664l-2.508 3.96-5.604-3.327zm3.632 6.756L15.307 23h-7.71l3.423-5.203zm2.159.38.689.425v7.673l-4.328-2.59z" />
      </G>
    </Svg>
  );
};