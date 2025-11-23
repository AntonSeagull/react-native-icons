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

export const SiTailscale = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M24 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M3 24a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m18 .5a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0m9-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M3 5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
      </G>
    </Svg>
  );
};