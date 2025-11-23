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

export const TbGripVertical = (props: IconProps) => {
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
        <Path d="M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  );
};