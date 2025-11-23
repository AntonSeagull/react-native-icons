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

export const PiGitDiffBold = (props: IconProps) => {
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
        <Path d="M112 148a12 12 0 0 0-12 12v19l-30.83-30.8a4 4 0 0 1-1.17-2.83V97.94a36 36 0 1 0-24 0v47.43a27.8 27.8 0 0 0 8.2 19.8L83 196H64a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12M56 52a12 12 0 1 1-12 12 12 12 0 0 1 12-12m156 106.06v-47.43a27.8 27.8 0 0 0-8.2-19.8L173 60h19a12 12 0 0 0 0-24h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l30.83 30.83a4 4 0 0 1 1.17 2.83v47.43a36 36 0 1 0 24 0ZM200 204a12 12 0 1 1 12-12 12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};