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

export const TbGhost2 = (props: IconProps) => {
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
        <Path d="M10 9h.01M14 9h.01M12 3a7 7 0 0 1 7 7v1h1a2 2 0 1 1 0 4h-1v3l2 3H11a6 6 0 0 1-6-5.775v-.226H4a2 2 0 0 1 0-4h1v-1a7 7 0 0 1 7-7z" />
        <Path d="M11 14h2a1 1 0 0 0-2 0" />
      </G>
    </Svg>
  );
};