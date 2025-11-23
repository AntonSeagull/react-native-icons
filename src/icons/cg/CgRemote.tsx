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

export const CgRemote = (props: IconProps) => {
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
        <Path fill="currentColor" d="m17.051 4.322 1.415 1.414-4.243 4.243 4.243 4.242-1.415 1.415-5.656-5.657zM6.949 19.679l-1.415-1.415 4.243-4.242-4.243-4.243L6.95 8.365l5.656 5.657z" />
      </G>
    </Svg>
  );
};