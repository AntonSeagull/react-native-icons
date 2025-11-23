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

export const FiDatabase = (props: IconProps) => {
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
        <Ellipse cx={12} cy={5} rx={9} ry={3} />
        <Path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <Path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </G>
    </Svg>
  );
};