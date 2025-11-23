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

export const PiLinkSimpleThin = (props: IconProps) => {
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
        <Path d="M162.84 93.16a4 4 0 0 1 0 5.66l-64 64a4 4 0 0 1-5.66-5.66l64-64a4 4 0 0 1 5.66 0m49.95-49.95a52.07 52.07 0 0 0-73.56 0l-30.06 30.06a4 4 0 0 0 5.65 5.66l30.07-30.06a44 44 0 0 1 62.24 62.24l-30.07 30.06a4 4 0 0 0 5.66 5.66l30.07-30.06a52.07 52.07 0 0 0 0-73.56m-71.62 133.85-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66" />
      </G>
    </Svg>
  );
};