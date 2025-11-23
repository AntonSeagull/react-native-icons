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

export const LiaMapMarkedAltSolid = (props: IconProps) => {
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
        <Path d="M22 3c-3.3 0-6 2.7-6 6 0 .992.383 2.004.875 3.125a35 35 0 0 0 1.75 3.406 62 62 0 0 0 2.563 4.031L22 20.75l.813-1.187s1.289-1.836 2.562-4.032a35 35 0 0 0 1.75-3.406C27.617 11.004 28 9.992 28 9c0-3.3-2.7-6-6-6M11.969 4.938 4 8.344V27.53l8.031-3.468 8 3L28 23.656v-8.718a49 49 0 0 1-2 3.437v3.969l-5 2.125v-1.625l-1.469-2.125c-.156-.227-.34-.496-.531-.782v4.625l-6-2.25V7.438l1.094.407a7.9 7.9 0 0 1 .531-1.938ZM22 5c2.219 0 4 1.781 4 4 0 .387-.242 1.3-.687 2.313-.446 1.011-1.075 2.16-1.688 3.218-.816 1.406-1.168 1.906-1.625 2.594-.457-.687-.809-1.187-1.625-2.594-.613-1.058-1.242-2.207-1.687-3.219C18.242 10.302 18 9.388 18 9c0-2.219 1.781-4 4-4M11 7.5v14.844l-5 2.125V9.656Zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
      </G>
    </Svg>
  );
};