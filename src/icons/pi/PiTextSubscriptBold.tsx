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

export const PiTextSubscriptBold = (props: IconProps) => {
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
        <Path d="M252 208a12 12 0 0 1-12 12h-48a12 12 0 0 1-9.6-19.2l43.17-57.56a12 12 0 0 0-2.35-16.82 12 12 0 0 0-18.54 5.58 12 12 0 0 1-22.63-8 36.3 36.3 0 0 1 5.2-9.67 36 36 0 0 1 57.5 43.34L216 196h24a12 12 0 0 1 12 12M151.86 46.93a12 12 0 0 0-16.93 1.21L92 97.68 49.07 48.14a12 12 0 0 0-18.14 15.72L76.12 116l-45.19 52.14a12 12 0 0 0 18.14 15.72L92 134.32l42.93 49.54a12 12 0 1 0 18.14-15.72L107.88 116l45.19-52.14a12 12 0 0 0-1.21-16.93" />
      </G>
    </Svg>
  );
};