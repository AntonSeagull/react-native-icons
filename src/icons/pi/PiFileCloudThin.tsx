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

export const PiFileCloudThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m210.83 85.17-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65 198.34 84H156ZM108 132a47.72 47.72 0 0 0-45.3 32H60a32 32 0 0 0 0 64h48a48 48 0 0 0 0-96m0 88H60a24 24 0 0 1 0-48h.66c-.2 1.2-.35 2.41-.46 3.64a4 4 0 0 0 8 .72 41 41 0 0 1 1.23-6.92 5 5 0 0 0 .21-.73A40 40 0 1 1 108 220" />
      </G>
    </Svg>
  );
};