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

export const WiMoonWaningGibbous5 = (props: IconProps) => {
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
        <Path d="M3.74 14.47c0 2.03.5 3.91 1.51 5.63s2.37 3.09 4.09 4.09 3.6 1.51 5.63 1.51c2.17-2.75 3.25-6.5 3.25-11.24 0-3.96-1.08-7.71-3.25-11.24-2.03 0-3.91.5-5.63 1.5S6.26 7.1 5.25 8.83s-1.51 3.61-1.51 5.64" />
      </G>
    </Svg>
  );
};