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

export const TbGripHorizontal = (props: IconProps) => {
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
        <Path d="M4 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  );
};