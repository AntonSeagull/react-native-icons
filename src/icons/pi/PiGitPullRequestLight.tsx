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

export const PiGitPullRequestLight = (props: IconProps) => {
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
        <Path d="M102 64a30 30 0 1 0-36 29.4v69.2a30 30 0 1 0 12 0V93.4A30.05 30.05 0 0 0 102 64m-48 0a18 18 0 1 1 18 18 18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18m116-29.4v-52a21.88 21.88 0 0 0-6.44-15.56L158.48 54H192a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l41.07 41.08a9.9 9.9 0 0 1 2.93 7.07v52a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18 18 18 0 0 1-18 18" />
      </G>
    </Svg>
  );
};