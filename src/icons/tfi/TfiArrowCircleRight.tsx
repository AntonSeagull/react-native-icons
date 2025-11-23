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

export const TfiArrowCircleRight = (props: IconProps) => {
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
        <Path d="M6.854 4.146 11.207 8.5l-4.354 4.354-.707-.707L9.793 8.5 6.146 4.854zM17 8.5c0 4.687-3.813 8.5-8.5 8.5S0 13.187 0 8.5 3.813 0 8.5 0 17 3.813 17 8.5m-1 0C16 4.364 12.636 1 8.5 1S1 4.364 1 8.5 4.364 16 8.5 16 16 12.636 16 8.5" />
      </G>
    </Svg>
  );
};