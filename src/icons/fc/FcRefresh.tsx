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

export const FcRefresh = (props: IconProps) => {
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
        <Path d="M13 13c0-3.3 2.7-6 6-6h10c3.3 0 6 2.7 6 6h4c0-5.5-4.5-10-10-10H19C13.5 3 9 7.5 9 13v11.2h4z" />
        <Path d="m4.6 22 6.4 8.4 6.4-8.4z" />
        <Path d="M35 35c0 3.3-2.7 6-6 6H19c-3.3 0-6-2.7-6-6H9c0 5.5 4.5 10 10 10h10c5.5 0 10-4.5 10-10V23h-4z" />
        <Path d="m30.6 26 6.4-8.4 6.4 8.4z" />
      </G>
    </Svg>
  );
};