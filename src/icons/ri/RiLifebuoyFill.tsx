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

export const RiLifebuoyFill = (props: IconProps) => {
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
        <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M7.197 14.682l-2.175 2.173a8.6 8.6 0 0 0 1.818 1.9l.305.223 2.173-2.175a5.5 5.5 0 0 1-1.98-1.883zm9.606 0a5.5 5.5 0 0 1-1.883 1.98l-.238.14 2.173 2.176a8.6 8.6 0 0 0 1.9-1.818l.223-.305zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8M7.145 5.022a8.6 8.6 0 0 0-1.9 1.818l-.223.305 2.175 2.173a5.5 5.5 0 0 1 1.883-1.98l.238-.14zm9.71 0-2.173 2.175a5.5 5.5 0 0 1 1.98 1.883l.14.238 2.176-2.173a8.6 8.6 0 0 0-1.818-1.9z" />
      </G>
    </Svg>
  );
};