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

export const PiUserCircleMinusBold = (props: IconProps) => {
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
        <Path d="M164 56a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12m65.85 36A108 108 0 1 1 128 20a109 109 0 0 1 18 1.49 12 12 0 0 1-4 23.67A85 85 0 0 0 128 44a83.94 83.94 0 0 0-65.95 135.94 83.5 83.5 0 0 1 29-23.42 52 52 0 1 1 74 0 83.36 83.36 0 0 1 29 23.42A83.94 83.94 0 0 0 207.22 100a12 12 0 0 1 22.63-8M128 148a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0 64a83.53 83.53 0 0 0 48.43-15.43 60 60 0 0 0-96.86 0A83.53 83.53 0 0 0 128 212" />
      </G>
    </Svg>
  );
};