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

export const LiaMarsStrokeVSolid = (props: IconProps) => {
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
        <Path d="m16 1.594-.719.687-6 6L10.72 9.72 15 5.438V10h-3v2h3v2.063c-3.934.5-7 3.87-7 7.937 0 4.406 3.594 8 8 8s8-3.594 8-8c0-4.066-3.066-7.437-7-7.937V12h3v-2h-3V5.438l4.281 4.28 1.438-1.437-6-6ZM16 16c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6" />
      </G>
    </Svg>
  );
};