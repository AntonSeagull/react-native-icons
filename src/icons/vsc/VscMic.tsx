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

export const VscMic = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 10.5A2.5 2.5 0 0 0 10.5 8V3.5a2.5 2.5 0 0 0-5 0V8A2.5 2.5 0 0 0 8 10.5m-1.5-7a1.5 1.5 0 0 1 3 0V8a1.5 1.5 0 0 1-3 0zm2 8.972V14h2v1h-5v-1h2v-1.528A4.5 4.5 0 0 1 3.5 8h1a3.5 3.5 0 0 0 7 0h1a4.5 4.5 0 0 1-4 4.472" />
      </G>
    </Svg>
  );
};