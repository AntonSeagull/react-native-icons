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

export const TiUpload = (props: IconProps) => {
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
        <Path d="M20.987 16a1 1 0 0 0-.039-.316l-2-6A1 1 0 0 0 18 9h-4v2h3.279l1.667 5H5.054l1.667-5H10V9H6a1 1 0 0 0-.948.684l-2 6a1 1 0 0 0-.039.316C3 16 3 21 3 21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1s0-5-.013-5M16 7.904c.259 0 .518-.095.707-.283a1 1 0 0 0 0-1.414L12 1.5 7.293 6.207a1 1 0 0 0 0 1.414c.189.189.448.283.707.283s.518-.094.707-.283L11 5.328V12a1 1 0 0 0 2 0V5.328l2.293 2.293a1 1 0 0 0 .707.283" />
      </G>
    </Svg>
  );
};