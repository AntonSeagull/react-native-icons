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

export const WiMoonWaningGibbous2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3.74 14.49c0 1.22.19 2.4.56 3.54s.91 2.17 1.6 3.09 1.5 1.72 2.42 2.42 1.95 1.23 3.09 1.6 2.32.56 3.54.56c4.33-1.73 6.49-5.47 6.49-11.22q0-2.085-.54-3.93c-.54-1.845-.85-2.31-1.47-3.23s-1.31-1.71-2.06-2.39-1.56-1.23-2.42-1.66c-2.03 0-3.91.5-5.63 1.5S6.25 7.14 5.24 8.86s-1.5 3.6-1.5 5.63" />
      </G>
    </Svg>
  );
};