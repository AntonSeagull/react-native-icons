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

export const PiFootballHelmetThin = (props: IconProps) => {
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
        <Path d="M92 164a8 8 0 1 1-8-8 8 8 0 0 1 8 8m136 12v32a12 12 0 0 1-12 12h-36a12.08 12.08 0 0 1-11.51-8.6L156.83 172h-30.28l5.09 17.13a2 2 0 0 1 .07.27A12 12 0 0 1 120 204H72.14a4 4 0 0 1-2.26-.7A96 96 0 0 1 28 124c0-52.19 42.47-95.23 94.63-96A96 96 0 0 1 220 124v4a4 4 0 0 1-4 4h-62.65l9.46 32H216a12 12 0 0 1 12 12m-104.07 15.25-15.57-52.37a3 3 0 0 1-.07-.28A12 12 0 0 1 120 124h92a88 88 0 0 0-89.25-88C74.93 36.67 36 76.13 36 124a88 88 0 0 0 37.39 72H120a4 4 0 0 0 3.93-4.75M154.46 164 145 132h-25a4 4 0 0 0-3.93 4.75l8.1 27.25ZM220 176a4 4 0 0 0-4-4h-50.83l11 37.13A4 4 0 0 0 180 212h36a4 4 0 0 0 4-4Z" />
      </G>
    </Svg>
  );
};