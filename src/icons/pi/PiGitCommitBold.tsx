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

export const PiGitCommitBold = (props: IconProps) => {
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
        <Path d="M244 116h-57.21a60 60 0 0 0-117.58 0H12a12 12 0 0 0 0 24h57.21a60 60 0 0 0 117.58 0H244a12 12 0 0 0 0-24m-116 48a36 36 0 1 1 36-36 36 36 0 0 1-36 36" />
      </G>
    </Svg>
  );
};