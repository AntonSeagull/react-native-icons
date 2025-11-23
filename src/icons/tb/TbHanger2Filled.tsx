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

export const TbHanger2Filled = (props: IconProps) => {
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
        <Path d="M12 2a3 3 0 0 1 3 3 1 1 0 0 1-1.993.117L13 5a1 1 0 0 0-2-.004c.006 1.516.495 2.579 1.486 3.13l7.97 4.428A3 3 0 0 1 22 15.177V16a3 3 0 0 1-2.824 2.995L19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3 3 3 0 0 1-3-3v-.823a3 3 0 0 1 1.543-2.623l6.695-3.72C9.406 7.858 9.006 6.538 9 5a3 3 0 0 1 3-3m0 8.144-7.486 4.158a1 1 0 0 0-.514.875V16a1 1 0 0 0 1 1h.17A3 3 0 0 1 8 15h8c1.306 0 2.418.835 2.83 2H19a1 1 0 0 0 1-1v-.823a1 1 0 0 0-.515-.875z" />
      </G>
    </Svg>
  );
};