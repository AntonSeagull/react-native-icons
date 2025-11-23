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

export const RiAccountBox2Line = (props: IconProps) => {
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
        <Path d="M4.995 3A1.995 1.995 0 0 0 3 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0 0 21 19.005V4.995A1.995 1.995 0 0 0 19.005 3zM5 19V5h14v14zm7-11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2" />
      </G>
    </Svg>
  );
};