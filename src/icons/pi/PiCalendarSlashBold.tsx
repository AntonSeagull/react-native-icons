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

export const PiCalendarSlashBold = (props: IconProps) => {
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
        <Path d="M56.88 31.93A12 12 0 0 0 48 28a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a12 12 0 0 0 8.88-20.07ZM52 204V62.24L180.87 204ZM228 48v117.34a12 12 0 1 1-24 0V100h-58.31a12 12 0 0 1 0-24H204V52h-16a12 12 0 0 1-24 0h-61.94a12 12 0 0 1 0-24H164v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20" />
      </G>
    </Svg>
  );
};