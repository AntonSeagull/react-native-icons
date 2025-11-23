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

export const GiAzulFlake = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 16v99.3l119 118.9V120.1zm256 0L265 120.1v114.1l119-119zM16 128l104 119h114.2L115.3 128zm380.8 0-119 119h114.1l104-119zM120 265 16 384h99.2l119-119zm157.8 0 119 119h99.1l-104-119zM247 277.8l-119 119V496l119-104.1zm18 0v114.1L384 496v-99.2z" />
      </G>
    </Svg>
  );
};