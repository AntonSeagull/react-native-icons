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

export const WiMoonWaningGibbous4 = (props: IconProps) => {
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
        <Path d="M3.74 14.47c0 1.52.3 2.98.89 4.37s1.39 2.58 2.4 3.59 2.2 1.8 3.59 2.4 2.84.89 4.37.89c2.89-2.39 4.34-6.14 4.34-11.24 0-2.34-.41-4.47-1.22-6.36S16.26 4.6 15 3.25c-2.03 0-3.91.5-5.64 1.51S6.25 7.12 5.24 8.84s-1.5 3.6-1.5 5.63" />
      </G>
    </Svg>
  );
};