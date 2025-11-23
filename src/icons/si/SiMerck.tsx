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

export const SiMerck = (props: IconProps) => {
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
        <Path d="M6 6a6 6 0 0 1 12 0zm0 12a6 6 0 0 1 6-6 6 6 0 0 1-6-6 6 6 0 0 0 0 12 6 6 0 1 0 12 0zm6-6a6 6 0 0 1 6 6 6 6 0 1 0 0-12 6 6 0 0 1-6 6" />
      </G>
    </Svg>
  );
};