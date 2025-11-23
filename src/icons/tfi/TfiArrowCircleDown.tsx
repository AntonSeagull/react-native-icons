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

export const TfiArrowCircleDown = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m12.146 6.146.707.707L8.5 11.207 4.146 6.854l.707-.707L8.5 9.793zM17 8.5c0 4.687-3.813 8.5-8.5 8.5S0 13.187 0 8.5 3.813 0 8.5 0 17 3.813 17 8.5m-1 0C16 4.364 12.636 1 8.5 1S1 4.364 1 8.5 4.364 16 8.5 16 16 12.636 16 8.5" />
      </G>
    </Svg>
  );
};