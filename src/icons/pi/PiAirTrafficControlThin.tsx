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

export const PiAirTrafficControlThin = (props: IconProps) => {
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
        <Path d="M225.83 73.11A12 12 0 0 0 216 68h-84V28h20a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8h20v40H40a12 12 0 0 0-11.28 16.1l26.19 72a12 12 0 0 0 11.27 7.9H100v68a4 4 0 0 0 8 0v-68h40v68a4 4 0 0 0 8 0v-68h33.82a12 12 0 0 0 11.27-7.9l26.19-72a12 12 0 0 0-1.45-10.99M107.34 156 92.79 76h70.42l-14.55 80Zm-44.92-2.63-26.18-72A4 4 0 0 1 40 76h44.66l14.54 80h-33a4 4 0 0 1-3.78-2.63m157.34-72-26.18 72a4 4 0 0 1-3.76 2.63h-33l14.55-80H216a4 4 0 0 1 3.76 5.37" />
      </G>
    </Svg>
  );
};