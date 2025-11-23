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

export const LiaResolving = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 3C9.857 3 4.711 7.288 3.361 13.025l.016-.005 11.559-3.33c1.809-.528 2.82-.605 4.132-.426 1.888.318 2.745 1.3 3.192 2.88l.564 1.97c.427 1.46.052 2.632-1.23 3.835-1.004.904-1.621 1.272-3.201 1.729l-4.82 1.38 11.478 1.413.506 1.777-2.504.697-14.936-1.94 1.17 4.106A12.9 12.9 0 0 0 16 29c7.168 0 13-5.832 13-13S23.168 3 16 3m2.04 8.73c-.536-.005-1.275.13-2.31.43l-9.86 2.83 1.5 5.17 10.37-3c2.41-.69 2.6-1.23 2.31-2.27l-.59-2.06c-.2-.687-.529-1.09-1.42-1.1M3.007 16.133a12.9 12.9 0 0 0 1.94 6.678z" />
      </G>
    </Svg>
  );
};