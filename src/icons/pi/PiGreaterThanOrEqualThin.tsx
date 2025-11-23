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

export const PiGreaterThanOrEqualThin = (props: IconProps) => {
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
        <Path d="M54.62 156.25 196.43 104 54.62 51.75a4 4 0 0 1 2.76-7.5l152 56a4 4 0 0 1 0 7.5l-152 56A3.9 3.9 0 0 1 56 164a4 4 0 0 1-1.38-7.75M208 196H56a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};