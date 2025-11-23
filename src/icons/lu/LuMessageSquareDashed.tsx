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

export const LuMessageSquareDashed = (props: IconProps) => {
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
        <Path d="M12 19h.01M12 3h.01M16 19h.01M16 3h.01M2 13h.01M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8M2 5a2 2 0 0 1 2-2M2 9h.01M20 3a2 2 0 0 1 2 2M22 13h.01M22 17a2 2 0 0 1-2 2M22 9h.01M8 3h.01" />
      </G>
    </Svg>
  );
};