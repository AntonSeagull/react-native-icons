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

export const PiPerspectiveThin = (props: IconProps) => {
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
        <Path d="M240 124h-20V48a12 12 0 0 0-14.15-11.81l-160 29.1A12 12 0 0 0 36 77.09V124H16a4 4 0 0 0 0 8h20v46.91a12 12 0 0 0 9.85 11.8l160 29.09a11.3 11.3 0 0 0 2.16.2 12 12 0 0 0 12-12v-76h20a4 4 0 0 0 0-8ZM44 77.09a4 4 0 0 1 3.28-3.93l160-29.09A4 4 0 0 1 212 48v76H44ZM212 208a4 4 0 0 1-4.72 3.93l-160-29.09a4 4 0 0 1-3.28-3.93V132h168Z" />
      </G>
    </Svg>
  );
};