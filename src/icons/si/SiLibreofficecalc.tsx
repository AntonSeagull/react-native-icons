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

export const SiLibreofficecalc = (props: IconProps) => {
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
        <Path d="M9 13H7v-1h2zm6-3h-2v1h2zm-6 0H7v1h2zm3 0h-2v1h2zm3-10 7 7V0zM9 14H7v1h2zm5 3h1v-3h-1zm2 0h1v-1h-1zm-4 0h1v-2h-1zm1-17 9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3zm5 13h-7v5h7zm-2-4H6v7h4.5v-1H10v-1h.5v-1H10v-1h2v.5h1V12h2v.5h1z" />
      </G>
    </Svg>
  );
};