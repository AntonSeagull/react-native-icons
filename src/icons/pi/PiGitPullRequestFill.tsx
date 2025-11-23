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

export const PiGitPullRequestFill = (props: IconProps) => {
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
        <Path d="M104 64a32 32 0 1 0-40 31v66a32 32 0 1 0 16 0V95a32.06 32.06 0 0 0 24-31M88 192a16 16 0 1 1-16-16 16 16 0 0 1 16 16m144 0a32 32 0 1 1-40-31v-50.37a8 8 0 0 0-2.34-5.66L152 67.31V96a8 8 0 0 1-16 0V48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-28.69L201 93.66a23.85 23.85 0 0 1 7 17V161a32.06 32.06 0 0 1 24 31" />
      </G>
    </Svg>
  );
};