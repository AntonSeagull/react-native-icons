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

export const PiBoxingGloveDuotone = (props: IconProps) => {
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
        <Path d="M216 72v46.88a7.9 7.9 0 0 1-.31 2.2L200 176v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8v-40l-38.25-37.81a8 8 0 0 1-1.75-5V104a24 24 0 0 1 24-24h16v-8a48 48 0 0 1 48-48h48a48 48 0 0 1 48 48" opacity={0.2} />
        <Path d="M168 16h-48a56.06 56.06 0 0 0-56 56h-8a32 32 0 0 0-32 32v29.19a16.14 16.14 0 0 0 3.5 10q.3.36.63.69L64 179.34V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-38.88l15.38-53.84a16 16 0 0 0 .62-4.4V72a56.06 56.06 0 0 0-56-56m40 102.88-15.69 54.92a7.9 7.9 0 0 0-.31 2.2v40H80v-40a8 8 0 0 0-2.38-5.69L40 133.12V104a16 16 0 0 1 16-16h8v16a8 8 0 0 0 16 0V72a40 40 0 0 1 40-40h48a40 40 0 0 1 40 40Zm-36.42 48.28L153.89 176l17.69 8.84a8 8 0 0 1-7.16 14.32L136 184.94l-28.42 14.22a8 8 0 1 1-7.16-14.32l17.69-8.84-17.69-8.84a8 8 0 1 1 7.16-14.32L136 167.06l28.42-14.22a8 8 0 1 1 7.16 14.32" />
      </G>
    </Svg>
  );
};