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

export const PiUserListLight = (props: IconProps) => {
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
        <Path d="M154 80a6 6 0 0 1 6-6h88a6 6 0 0 1 0 12h-88a6 6 0 0 1-6-6m94 42h-88a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12m0 48h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-98.19 20.5a6 6 0 1 1-11.62 3C131.7 168.29 107.23 150 80 150s-51.7 18.29-58.19 43.49a6 6 0 1 1-11.62-3c5.74-22.28 23-40.07 44.67-48a46 46 0 1 1 50.28 0c21.65 7.94 38.94 25.73 44.67 48.01M80 138a34 34 0 1 0-34-34 34 34 0 0 0 34 34" />
      </G>
    </Svg>
  );
};