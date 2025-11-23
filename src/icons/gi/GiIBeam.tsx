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

export const GiIBeam = (props: IconProps) => {
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
        <Path d="M39.557 19 323.44 273h149.003L188.56 19zM25 30.13v25.847L311 311.87v-25.846zm64 107.263v34.584L375 427.87v-84.843l-64-13.002zM77.555 185.89l-42.9 10.723 287.79 257.498 42.9-10.723zM25 212.13v23.847L311 491.87v-23.847zM329 291v21.973l64 16v126.054l-64 16V493h158v-21.973l-64-16V328.973l64-16V291zm112 135.865v14.108l21.88 5.47z" />
      </G>
    </Svg>
  );
};