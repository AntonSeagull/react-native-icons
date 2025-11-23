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

export const PiWaveformSlashThin = (props: IconProps) => {
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
        <Path d="M52 96v64a4 4 0 0 1-8 0V96a4 4 0 0 1 8 0m-1-58.69a4 4 0 0 0-6 5.38l39 42.86V224a4 4 0 0 0 8 0V94.35l32 35.2V192a4 4 0 0 0 8 0v-53.65l73 80.34a4 4 0 1 0 5.92-5.38Zm37 3.12a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v4.43a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V64a4 4 0 0 0-8 0v16.43a4 4 0 0 0 4 4m40 44a4 4 0 0 0 4-4V96a4 4 0 0 0-8 0v28.43a4 4 0 0 0 4 4M208 76a4 4 0 0 0-4 4v88.43a4 4 0 0 0 8 0V80a4 4 0 0 0-4-4" />
      </G>
    </Svg>
  );
};