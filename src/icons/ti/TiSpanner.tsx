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

export const TiSpanner = (props: IconProps) => {
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
        <Path d="M20.285 7.119a.5.5 0 0 0-.354-.344.49.49 0 0 0-.477.126l-2.616 2.557-1.914-.383-.381-1.907 2.645-2.585a.5.5 0 0 0-.199-.835A5 5 0 0 0 15.5 3.5c-2.757 0-5 2.243-5 5 0 .323.038.65.118 1.01-.562.463-1.096.862-1.701 1.314-.865.646-1.845 1.377-3.182 2.506A3.56 3.56 0 0 0 4.5 16c0 1.93 1.57 3.5 3.5 3.5a3.48 3.48 0 0 0 2.662-1.25 58 58 0 0 0 2.544-3.209c.442-.591.832-1.111 1.283-1.66.36.081.688.119 1.011.119 2.757 0 5-2.243 5-5a4.9 4.9 0 0 0-.215-1.381M8 17a1 1 0 1 1 0-2 1 1 0 1 1 0 2" />
      </G>
    </Svg>
  );
};