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

export const TbPuzzleFilled = (props: IconProps) => {
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
        <Path d="M10 2a3 3 0 0 1 2.995 2.824L13 5v1h3a2 2 0 0 1 1.995 1.85L18 8v3h1a3 3 0 0 1 .176 5.995L19 17h-1v3a2 2 0 0 1-1.85 1.995L16 22h-3a2 2 0 0 1-1.995-1.85L11 20v-1a1 1 0 0 0-1.993-.117L9 19v1a2 2 0 0 1-1.85 1.995L7 22H4a2 2 0 0 1-1.995-1.85L2 20v-3a2 2 0 0 1 1.85-1.995L4 15h1a1 1 0 0 0 .117-1.993L5 13H4a2 2 0 0 1-1.995-1.85L2 11V8a2 2 0 0 1 1.85-1.995L4 6h3V5a3 3 0 0 1 3-3" />
      </G>
    </Svg>
  );
};