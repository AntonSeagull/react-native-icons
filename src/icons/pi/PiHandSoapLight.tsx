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

export const PiHandSoapLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M182 98.48V88a30 30 0 0 0-30-30h-18V30h34a10 10 0 0 1 10 10 6 6 0 0 0 12 0 22 22 0 0 0-22-22h-64a6 6 0 0 0 0 12h18v28h-18a30 30 0 0 0-30 30v10.48A38.05 38.05 0 0 0 42 136v80a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-80a38.05 38.05 0 0 0-32-37.52M104 70h48a18 18 0 0 1 18 18v10H86V88a18 18 0 0 1 18-18m98 146a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-80a26 26 0 0 1 26-26h96a26 26 0 0 1 26 26Z" />
      </G>
    </Svg>
  );
};