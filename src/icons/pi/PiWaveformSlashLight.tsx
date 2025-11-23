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

export const PiWaveformSlashLight = (props: IconProps) => {
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
        <Path d="M54 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m-1.56-60a6 6 0 0 0-8.88 8L82 86.32V224a6 6 0 0 0 12 0V99.52l28 30.8V192a6 6 0 0 0 12 0v-48.48L203.56 220a6 6 0 0 0 8.88-8.08ZM88 42.43a6 6 0 0 0 6-6V32a6 6 0 0 0-12 0v4.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V64a6 6 0 0 0-12 0v16.43a6 6 0 0 0 6 6m40 44a6 6 0 0 0 6-6V96a6 6 0 0 0-12 0v28.43a6 6 0 0 0 6 6M208 74a6 6 0 0 0-6 6v88.43a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};