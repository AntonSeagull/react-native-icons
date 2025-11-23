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

export const PiEscalatorDownBold = (props: IconProps) => {
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
        <Path d="M167.51 88.49a12 12 0 0 1 17-17L188 75V48a12 12 0 0 1 24 0v27l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0ZM244 160v40a20 20 0 0 1-20 20h-56a12 12 0 0 1-8.82-3.86L66.75 116H32a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h56a12 12 0 0 1 8.82 3.86L189.25 140H224a20 20 0 0 1 20 20m-24 4h-36a12 12 0 0 1-8.82-3.86L82.75 60H36v32h36a12 12 0 0 1 8.82 3.86L173.25 196H220Z" />
      </G>
    </Svg>
  );
};