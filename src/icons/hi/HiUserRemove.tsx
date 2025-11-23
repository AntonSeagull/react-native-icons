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

export const HiUserRemove = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m3 11a6 6 0 0 0-12 0zm-1-9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" />
      </G>
    </Svg>
  );
};