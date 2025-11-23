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

export const LuKeyboardOff = (props: IconProps) => {
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
        <Path d="M20 4a2 2 0 0 1 2 2M22 6v10.41M7 16h9M9.69 4H20M14 8h.01M18 8h.01M2 2l20 20M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2M6 8h.01M8 12h.01" />
      </G>
    </Svg>
  );
};