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

export const LiaSynagogueSolid = (props: IconProps) => {
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
        <Path d="m16 4.656-.656.594L7.625 12H4v15h10v-4c0-1.117.883-2 2-2s2 .883 2 2v4h10V12h-3.625l-7.719-6.75ZM6 7c-.582.875-2 1.008-2 2.656 0 .926.656 1.344.656 1.344h2.688S8 10.582 8 9.656C8 7.922 6.656 7.848 6 7m20 0c-.582.875-2 1.5-2 2.656 0 .926.656 1.344.656 1.344h2.688S28 10.582 28 9.656C28 8.414 26.656 7.848 26 7m-10 .313 7.344 6.437.281.25H26v11h-6v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2H6V14h2.375l.281-.25Zm0 4.156-.875 1.5h-1.719l.844 1.5-.844 1.5h1.719L16 17.5l.875-1.531h1.719l-.844-1.5.844-1.5h-1.719Z" />
      </G>
    </Svg>
  );
};