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

export const PiSneaker = (props: IconProps) => {
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
        <Path d="m228.65 129.11-60.73-20.24a24 24 0 0 1-14.32-13L130.39 41.6v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95M115.72 48l7.11 16.63-21.56 7.85A8 8 0 0 0 104 88a7.9 7.9 0 0 0 2.73-.49l22.4-8.14 4.74 11.07-16.6 6A8 8 0 0 0 120 112a7.9 7.9 0 0 0 2.73-.49l17.6-6.4a40.2 40.2 0 0 0 7.68 10l-14.74 5.36A8 8 0 0 0 136 136a8.1 8.1 0 0 0 2.73-.48l28-10.18 56.87 18.95A24 24 0 0 1 238.93 160H40V75.53ZM40 192v-16h200v16Z" />
      </G>
    </Svg>
  );
};