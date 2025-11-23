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

export const TbBinaryTree2 = (props: IconProps) => {
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
        <Path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 8v8M6.316 12.496l4.368-4.992M17.684 12.496l-4.366-4.99" />
      </G>
    </Svg>
  );
};