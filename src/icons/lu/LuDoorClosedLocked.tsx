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

export const LuDoorClosedLocked = (props: IconProps) => {
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
        <Path d="M10 12h.01M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14M2 20h8M20 17v-2a2 2 0 1 0-4 0v2" />
        <Rect width={8} height={5} x={14} y={17} rx={1} />
      </G>
    </Svg>
  );
};