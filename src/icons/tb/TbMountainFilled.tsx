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

export const TbMountainFilled = (props: IconProps) => {
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
        <Path d="m6.18 10.95 2.54 3.175.084.093a1 1 0 0 0 1.403-.01l1.637-1.638 1.324 1.985a1 1 0 0 0 1.457.226l3.632-2.906 3.647 7.697A1 1 0 0 1 21 21H3a1 1 0 0 1-.904-1.428zM12 3.072a3.3 3.3 0 0 1 2.983 1.888l2.394 5.057-3.15 2.52-1.395-2.092-.075-.099a1 1 0 0 0-1.464-.053l-1.711 1.709-1.301-1.627L7.13 8.94l1.888-3.98A3.3 3.3 0 0 1 12 3.072" />
      </G>
    </Svg>
  );
};