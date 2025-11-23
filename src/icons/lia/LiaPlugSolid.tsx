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

export const LiaPlugSolid = (props: IconProps) => {
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
        <Path d="m22 3.594-4 3.969-2.281-2.282L14.28 6.72l.75.75-5.125 5.125a3.126 3.126 0 0 0 0 4.406l1.844 1.844-7.469 7.437L5.72 27.72l7.437-7.469L15 22.094a3.126 3.126 0 0 0 4.406 0l5.125-5.125.75.75 1.438-1.438L24.437 14l3.97-4L27 8.594l-4 3.969L19.438 9l3.968-4Zm-5.562 5.281 6.687 6.688L18 20.687c-.387.387-1.207.387-1.594 0l-5.093-5.093c-.387-.387-.387-1.207 0-1.594Z" />
      </G>
    </Svg>
  );
};