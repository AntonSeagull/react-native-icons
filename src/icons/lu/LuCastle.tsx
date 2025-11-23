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

export const LuCastle = (props: IconProps) => {
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
        <Path d="M10 5V3M14 5V3M15 21v-3a3 3 0 0 0-6 0v3M18 3v8M18 5H6M22 11H2" />
        <Path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9M6 3v8" />
      </G>
    </Svg>
  );
};