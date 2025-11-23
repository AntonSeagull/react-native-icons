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

export const VscSearchFuzzy = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 1.5a4.5 4.5 0 0 0-3.263 7.6l-3.694 3.694.707.707 3.755-3.755A4.5 4.5 0 1 0 8 1.5M4.5 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M9 13.855 6.854 16h-.708l-1.5-1.5.708-.707L6.5 14.94l2.146-2.146h.708L11.5 14.94l2.146-2.146h.707L16 14.44v1.415l-2-2L11.854 16h-.708z" />
      </G>
    </Svg>
  );
};