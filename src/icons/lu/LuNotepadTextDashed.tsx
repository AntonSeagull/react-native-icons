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

export const LuNotepadTextDashed = (props: IconProps) => {
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
        <Path d="M8 2v4M12 2v4M16 2v4M16 4h2a2 2 0 0 1 2 2v2M20 12v2M20 18v2a2 2 0 0 1-2 2h-1M13 22h-2M7 22H6a2 2 0 0 1-2-2v-2M4 14v-2M4 8V6a2 2 0 0 1 2-2h2M8 10h6M8 14h8M8 18h5" />
      </G>
    </Svg>
  );
};