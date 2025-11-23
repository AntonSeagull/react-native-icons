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

export const TbShoeOff = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m13.846 9.868 4.08.972A4 4 0 0 1 21 14.73V17m-3 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2" />
        <Path d="M8 18v-1a4 4 0 0 0-4-4H3M10 12l.663-1.327M3 3l18 18" />
      </G>
    </Svg>
  );
};