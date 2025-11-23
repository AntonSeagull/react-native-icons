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

export const TbBulldozer = (props: IconProps) => {
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
        <Path d="M2 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 13v4a2 2 0 0 0 2 2h1M14 19H4M4 15h10" />
        <Path d="M9 11V6h2a3 3 0 0 1 3 3v6" />
        <Path d="M5 15v-3a1 1 0 0 1 1-1h8M19 17h-3" />
      </G>
    </Svg>
  );
};