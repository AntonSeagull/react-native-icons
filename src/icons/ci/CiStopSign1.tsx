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

export const CiStopSign1 = (props: IconProps) => {
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
        <Path d="M12.531 15.688H10.14a.5.5 0 0 1 0-1h2.391a1.094 1.094 0 0 0 0-2.188h-1.063a2.094 2.094 0 0 1 0-4.188h2.391a.5.5 0 0 1 0 1h-2.391a1.094 1.094 0 0 0 0 2.188h1.063a2.094 2.094 0 0 1 0 4.188" />
        <Path d="M15.079 21.933H8.92a2.48 2.48 0 0 1-1.767-.733L2.8 16.847a2.48 2.48 0 0 1-.732-1.768V8.921A2.49 2.49 0 0 1 2.8 7.153L7.153 2.8a2.48 2.48 0 0 1 1.767-.733h6.159a2.48 2.48 0 0 1 1.767.732L21.2 7.154a2.48 2.48 0 0 1 .732 1.767v6.158a2.5 2.5 0 0 1-.731 1.768L16.846 21.2a2.48 2.48 0 0 1-1.767.733M8.92 3.067a1.5 1.5 0 0 0-1.06.439L3.506 7.861a1.5 1.5 0 0 0-.439 1.06v6.158a1.5 1.5 0 0 0 .439 1.061l4.354 4.354a1.5 1.5 0 0 0 1.06.439h6.159a1.5 1.5 0 0 0 1.06-.439l4.355-4.354a1.5 1.5 0 0 0 .439-1.061V8.921a1.5 1.5 0 0 0-.439-1.06l-4.355-4.355a1.5 1.5 0 0 0-1.06-.439Z" />
      </G>
    </Svg>
  );
};