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

export const CgEditUnmask = (props: IconProps) => {
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
        <Path fill="currentColor" d="M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6M22 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0M5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </G>
    </Svg>
  );
};