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

export const LuVibrateOff = (props: IconProps) => {
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
        <Path d="m2 8 2 2-2 2 2 2-2 2M22 8l-2 2 2 2-2 2 2 2M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2M16 10.34V6c0-.55-.45-1-1-1h-4.34M2 2l20 20" />
      </G>
    </Svg>
  );
};