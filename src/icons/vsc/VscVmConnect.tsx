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

export const VscVmConnect = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M1.5 2h13l.5.5v5.503a5 5 0 0 0-1-.583V3H2v9h5a5 5 0 0 0 1 3H4v-1h3v-1H1.5l-.5-.5v-10z" clipRule="evenodd" />
        <Path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 7a3 3 0 1 1 0-6.001A3 3 0 0 1 12 15" />
        <Path fillRule="evenodd" d="m12.133 11.435 1.436 1.436.431-.431-1.004-1.005L14 10.431l-.431-.43zm-1.129 1.067L10 11.498l.431-.431 1.436 1.435-1.436 1.436-.431-.431z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};