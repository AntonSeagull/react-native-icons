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

export const PiSailboatThin = (props: IconProps) => {
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
        <Path d="M243.61 174.27A4 4 0 0 0 240 172H140v-32h76a4 4 0 0 0 3-6.69l-79-86.86V8a4 4 0 0 0-7.1-2.52l-104 128A4 4 0 0 0 32 140h100v32H16a4 4 0 0 0-3.12 6.5l29.59 37a12 12 0 0 0 9.37 4.5h152.32a12 12 0 0 0 9.37-4.5l29.59-37a4 4 0 0 0 .49-4.23M207 132h-67V58.35Zm-166.6 0L132 19.27V132Zm166.88 78.5a4 4 0 0 1-3.12 1.5H51.84a4 4 0 0 1-3.12-1.5L24.32 180h207.36Z" />
      </G>
    </Svg>
  );
};