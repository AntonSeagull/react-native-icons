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

export const FcDoughnutChart = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#00BCD4" d="M24 30c-3.3 0-6-2.7-6-6s2.7-6 6-6V5C13.5 5 5 13.5 5 24s8.5 19 19 19c4.4 0 8.5-1.5 11.8-4.1l-8-10.2c-1.1.8-2.4 1.3-3.8 1.3" />
        <Path fill="#448AFF" d="M30 24h13c0-10.5-8.5-19-19-19v13c3.3 0 6 2.7 6 6" />
        <Path fill="#3F51B5" d="M43 24H30c0 1.9-.9 3.6-2.3 4.7l8 10.2C40.2 35.4 43 30 43 24" />
      </G>
    </Svg>
  );
};