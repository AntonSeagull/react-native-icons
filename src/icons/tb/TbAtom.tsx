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

export const TbAtom = (props: IconProps) => {
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
        <Path d="M12 12v.01M19.071 4.929c-1.562-1.562-6 .337-9.9 4.243-3.905 3.905-5.804 8.337-4.242 9.9 1.562 1.561 6-.338 9.9-4.244 3.905-3.905 5.804-8.337 4.242-9.9" />
        <Path d="M4.929 4.929c-1.562 1.562.337 6 4.243 9.9 3.905 3.905 8.337 5.804 9.9 4.242 1.561-1.562-.338-6-4.244-9.9-3.905-3.905-8.337-5.804-9.9-4.242" />
      </G>
    </Svg>
  );
};