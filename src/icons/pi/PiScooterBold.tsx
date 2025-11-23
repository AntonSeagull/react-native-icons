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

export const PiScooterBold = (props: IconProps) => {
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
        <Path d="M212 132h-.68l-31.94-95.79A12 12 0 0 0 168 28h-32a12 12 0 0 0 0 24h23.35l14.83 44.49L114.59 164H83.2a40 40 0 1 0-2.55 24H120a12 12 0 0 0 9-4.06l54-61.13 5.6 16.81A40 40 0 1 0 212 132M44 188a16 16 0 1 1 16-16 16 16 0 0 1-16 16m168 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  );
};