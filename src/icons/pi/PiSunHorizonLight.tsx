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

export const PiSunHorizonLight = (props: IconProps) => {
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
        <Path d="M240 154h-42.72a71 71 0 0 0 .72-10 70 70 0 0 0-140 0 71 71 0 0 0 .72 10H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12M70 144a58 58 0 1 1 115.13 10H70.87a58.6 58.6 0 0 1-.87-10m144 56a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h160a6 6 0 0 1 6 6M74.63 42.69a6 6 0 0 1 10.74-5.37l8 16a6 6 0 0 1-10.74 5.36Zm-56 50.63a6 6 0 0 1 8.05-2.69l16 8a6 6 0 0 1-5.36 10.74l-16-8a6 6 0 0 1-2.69-8.05m192 13.36a6 6 0 0 1 2.69-8.05l16-8a6 6 0 1 1 5.36 10.74l-16 8a6 6 0 0 1-8.05-2.69m-48-53.36 8-16a6 6 0 0 1 10.74 5.37l-8 16a6 6 0 1 1-10.74-5.36Z" />
      </G>
    </Svg>
  );
};