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

export const SiBeatsbydre = (props: IconProps) => {
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
        <Path d="M12.01 15.6a3.6 3.6 0 1 0-3.6-3.6 3.6 3.6 0 0 0 3.6 3.6m0-15.598a12 12 0 0 0-3.6.552V7.2A6 6 0 1 1 6.01 12V1.603a11.999 11.999 0 1 0 6-1.601" />
      </G>
    </Svg>
  );
};