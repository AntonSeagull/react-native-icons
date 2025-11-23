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

export const PiMopedLight = (props: IconProps) => {
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
        <Path d="M216 130a37.7 37.7 0 0 0-7.56.76l-34.82-92.87A6 6 0 0 0 168 34h-32a6 6 0 0 0 0 12h27.84l33.37 89a38.08 38.08 0 0 0-18.73 27h-43.32l-25.54-68.11A6 6 0 0 0 104 90H24a6 6 0 0 0 0 12h10v16.67A54.12 54.12 0 0 0 2 168a6 6 0 0 0 6 6h10.48a38 38 0 0 0 75 0h85A38 38 0 1 0 216 130m-174-1.61a6 6 0 0 0 4-5.66V102h53.84l22.5 60H14.43A42.07 42.07 0 0 1 42 128.39M56 194a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 56 194m160 0a26 26 0 0 1-14.5-47.57l8.88 23.68a6 6 0 0 0 11.24-4.22l-8.88-23.68A27 27 0 0 1 216 142a26 26 0 0 1 0 52" />
      </G>
    </Svg>
  );
};