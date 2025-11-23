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

export const TbGlass = (props: IconProps) => {
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
        <Path d="M8 21h8M12 16v5M17 5l1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6" />
        <Path d="M7 5a5 2 0 1 0 10 0A5 2 0 1 0 7 5" />
      </G>
    </Svg>
  );
};