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

export const PiBoxingGloveFill = (props: IconProps) => {
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
        <Path d="M168 16h-48a56 56 0 0 0-56 56v31.73a8.17 8.17 0 0 1-7.47 8.27 8 8 0 0 1-8.53-8V78.7a4 4 0 0 0-5.63-3.65A32 32 0 0 0 24 104v29.19a16.14 16.14 0 0 0 3.5 10q.3.36.63.69L64 179.34V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-38.88l15.38-53.84a16 16 0 0 0 .62-4.4V72a56 56 0 0 0-56-56m3.58 168.84a8 8 0 0 1-7.16 14.32L136 184.94l-28.42 14.22a8 8 0 1 1-7.16-14.32l17.69-8.84-17.69-8.84a8 8 0 1 1 7.16-14.32L136 167.06l28.42-14.22a8 8 0 1 1 7.16 14.32L153.89 176Z" />
      </G>
    </Svg>
  );
};