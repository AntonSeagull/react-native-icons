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

export const LiaSpellCheckSolid = (props: IconProps) => {
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
        <Path d="M7.332 5 3 18h2.107l1-3h4.561l1 3h2.107L9.441 5zM15 5v13h6c2.206 0 4-1.794 4-4a4 4 0 0 0-2.51-3.705c.318-.527.51-1.136.51-1.795C23 6.57 21.43 5 19.5 5zm2 2h2.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H17zM8.389 8.162 10.002 13H6.775zM17 12h4c1.103 0 2 .897 2 2s-.897 2-2 2h-4zm10.809 5.777-8.692 8.336-3.924-3.777-1.386 1.44 5.306 5.11 10.078-9.663z" />
      </G>
    </Svg>
  );
};