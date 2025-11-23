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

export const TbBrandMatrix = (props: IconProps) => {
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
        <Path d="M4 3H3v18h1M20 21h1V3h-1M7 9v6M12 15v-3.5a2.5 2.5 0 1 0-5 0v.5M17 15v-3.5a2.5 2.5 0 1 0-5 0v.5" />
      </G>
    </Svg>
  );
};