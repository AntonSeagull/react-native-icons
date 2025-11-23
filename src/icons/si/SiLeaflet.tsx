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

export const SiLeaflet = (props: IconProps) => {
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
        <Path d="M17.69 0c-.355.574-8.432 4.74-10.856 8.649-2.424 3.91-3.116 6.988-2.237 9.882s2.559 2.763 3.516 3.717c.958.954 2.257 2.113 4.332 1.645 2.717-.613 5.335-2.426 6.638-7.508s.448-9.533-.103-11.99A35 35 0 0 0 17.69 0m-.138.858-9.22 21.585-.574-.577Z" />
      </G>
    </Svg>
  );
};