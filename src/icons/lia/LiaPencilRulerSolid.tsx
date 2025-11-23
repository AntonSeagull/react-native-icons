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

export const LiaPencilRulerSolid = (props: IconProps) => {
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
        <Path d="m8.813 3-.688.719-4.406 4.406L3 8.813 10.188 16l-5 5-.063.313-1.094 5.5-.312 1.468 1.469-.312 5.5-1.094.312-.062 5-5 7.156 7.156.688-.719 4.406-4.406.719-.688L21.812 16l4.938-4.937a4.1 4.1 0 0 0 0-5.813 4.1 4.1 0 0 0-2.906-1.219 4.1 4.1 0 0 0-2.907 1.219L16 10.188Zm0 2.844 1.937 1.968-1.469 1.47 1.438 1.437 1.469-1.469 2.374 2.375-2.968 2.969-5.781-5.781Zm15.03.125c.52 0 1.048.234 1.5.687.903.903.903 2.067 0 2.969l-.655.656-2.97-2.969.657-.656c.453-.453.95-.687 1.469-.687m-3.53 2.75 2.968 2.969L11.188 23.78a7 7 0 0 0-2.97-2.968Zm.093 8.687 2.375 2.375-1.5 1.5 1.438 1.438 1.5-1.5 1.906 1.906-3 3-5.719-5.719Zm-13.468 5a4.97 4.97 0 0 1 2.656 2.657l-3.313.656Z" />
      </G>
    </Svg>
  );
};