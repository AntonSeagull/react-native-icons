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

export const RiRocket2Line = (props: IconProps) => {
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
        <Path d="M15.502 20.005A6.52 6.52 0 0 1 12 23.507a6.52 6.52 0 0 1-3.502-3.502h2.26c.326.488.747.912 1.242 1.243.495-.33.916-.755 1.242-1.243zM18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545 3.496 1.098 6 4.062 6 7.545zm-.73 2.195L16 15.565v-6.56c0-2.318-1.57-4.43-4-5.421-2.43.99-4 3.103-4 5.42v6.561l-1.27 1.44zm-5.27-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
      </G>
    </Svg>
  );
};