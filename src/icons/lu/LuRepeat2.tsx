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

export const LuRepeat2 = (props: IconProps) => {
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
        <Path d="m2 9 3-3 3 3" />
        <Path d="M13 18H7a2 2 0 0 1-2-2V6M22 15l-3 3-3-3" />
        <Path d="M11 6h6a2 2 0 0 1 2 2v10" />
      </G>
    </Svg>
  );
};