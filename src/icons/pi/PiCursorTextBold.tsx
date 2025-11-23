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

export const PiCursorTextBold = (props: IconProps) => {
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
        <Path d="M188 208a12 12 0 0 1-12 12h-16a43.86 43.86 0 0 1-32-13.85A43.86 43.86 0 0 1 96 220H80a12 12 0 0 1 0-24h16a20 20 0 0 0 20-20v-36h-12a12 12 0 0 1 0-24h12V80a20 20 0 0 0-20-20H80a12 12 0 0 1 0-24h16a43.86 43.86 0 0 1 32 13.85A43.86 43.86 0 0 1 160 36h16a12 12 0 0 1 0 24h-16a20 20 0 0 0-20 20v36h12a12 12 0 0 1 0 24h-12v36a20 20 0 0 0 20 20h16a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};