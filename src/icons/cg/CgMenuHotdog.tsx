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

export const CgMenuHotdog = (props: IconProps) => {
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
        <Path fill="currentColor" d="M7 6a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zM7 18a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3zM3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z" />
      </G>
    </Svg>
  );
};