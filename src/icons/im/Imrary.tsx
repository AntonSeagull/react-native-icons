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

export const Imrary = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 15v-1h-1V8h1V7h-3v1h1v6h-3V8h1V7H9v1h1v6H7V8h1V7H5v1h1v6H3V8h1V7H1v1h1v6H1v1H0v1h17v-1zM8 0h1l8 5v1H0V5z" />
      </G>
    </Svg>
  );
};