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

export const PiCrosshairSimpleLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V184a6 6 0 0 0-12 0v33.8A90.15 90.15 0 0 1 38.2 134H72a6 6 0 0 0 0-12H38.2A90.15 90.15 0 0 1 122 38.2V72a6 6 0 0 0 12 0V38.2a90.15 90.15 0 0 1 83.8 83.8H184a6 6 0 0 0 0 12h33.8a90.15 90.15 0 0 1-83.8 83.8" />
      </G>
    </Svg>
  );
};