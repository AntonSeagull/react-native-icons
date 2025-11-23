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

export const PiFileAudioBold = (props: IconProps) => {
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
        <Path d="M96.59 124.91a12 12 0 0 0-13.08 2.6L63 148H44a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h19l20.48 20.48A12 12 0 0 0 104 224v-88a12 12 0 0 0-7.41-11.09M80 195l-3.51-3.52A12 12 0 0 0 68 188H56v-16h12a12 12 0 0 0 8.49-3.51L80 165Zm80-15a44.55 44.55 0 0 1-21.95 38.36A12 12 0 1 1 126 197.64a20.51 20.51 0 0 0 0-35.28 12 12 0 1 1 12.1-20.72A44.55 44.55 0 0 1 160 180m56.49-100.49-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v72a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v108h-16a12 12 0 0 0 0 24h20a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M160 57l23 23h-23Z" />
      </G>
    </Svg>
  );
};