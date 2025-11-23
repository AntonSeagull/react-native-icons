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

export const CgMenuOreos = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7 3a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zM7 11a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3zM7 13a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zM7 21a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3z" />
      </G>
    </Svg>
  );
};