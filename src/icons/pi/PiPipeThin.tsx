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

export const PiPipeThin = (props: IconProps) => {
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
        <Path d="M232 108h-28V52h28a4 4 0 0 0 0-8h-28.7a12 12 0 0 0-11.3-8h-16a12 12 0 0 0-11.3 8H144A100.11 100.11 0 0 0 44 144v20.7a12 12 0 0 0-8 11.3v16a12 12 0 0 0 8 11.3V232a4 4 0 0 0 8 0v-28h56v28a4 4 0 0 0 8 0v-28.7a12 12 0 0 0 8-11.3v-16a12 12 0 0 0-8-11.3V144a28 28 0 0 1 28-28h20.7a12 12 0 0 0 11.3 8h16a12 12 0 0 0 11.3-8H232a4 4 0 0 0 0-8m-116 84a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm-8-48v20H52v-20a92.1 92.1 0 0 1 92-92h20v56h-20a36 36 0 0 0-36 36m84-28h-16a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v64a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};