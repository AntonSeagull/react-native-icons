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

export const PiFunnelLight = (props: IconProps) => {
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
        <Path d="M228.77 50.34A13.8 13.8 0 0 0 216 42H40a14 14 0 0 0-10.33 23.42l.06.07L98 138.38V216a14 14 0 0 0 21.77 11.64l32-21.33a14 14 0 0 0 6.23-11.65v-56.28l68.33-73a13.82 13.82 0 0 0 2.44-15.04m-11.26 6.94-69.89 74.62A6 6 0 0 0 146 136v58.66a2 2 0 0 1-.89 1.67l-32 21.33A2 2 0 0 1 110 216v-80a6 6 0 0 0-1.62-4.1L38.53 57.32A2 2 0 0 1 40 54h176a1.9 1.9 0 0 1 1.83 1.19 1.86 1.86 0 0 1-.32 2.09" />
      </G>
    </Svg>
  );
};