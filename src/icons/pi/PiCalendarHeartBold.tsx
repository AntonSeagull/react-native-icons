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

export const PiCalendarHeartBold = (props: IconProps) => {
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
        <Path d="M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h16a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16ZM152 84a35.86 35.86 0 0 0-24 9.19A36 36 0 0 0 68 120c0 17 9.53 33.56 28.32 49.22a151.5 151.5 0 0 0 26.31 17.51 12 12 0 0 0 10.74 0 151.5 151.5 0 0 0 26.31-17.51C178.47 153.56 188 137 188 120a36 36 0 0 0-36-36m-24 78.29c-13.15-7.86-36-25.06-36-42.29a12 12 0 0 1 24 0 12 12 0 0 0 24 0 12 12 0 0 1 24 0c0 17.23-22.86 34.44-36 42.29" />
      </G>
    </Svg>
  );
};