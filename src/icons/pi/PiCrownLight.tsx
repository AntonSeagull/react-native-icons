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

export const PiCrownLight = (props: IconProps) => {
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
        <Path d="M246 80a26 26 0 1 0-46.6 15.84l-29.83 36.72-26-59.76a26 26 0 1 0-31.16 0l-26 59.76L56.6 95.84a26 26 0 1 0-22.36 10.09L49 194.3A14 14 0 0 0 62.78 206h130.44A14 14 0 0 0 207 194.3l14.73-88.37A26 26 0 0 0 246 80M128 38a14 14 0 1 1-14 14 14 14 0 0 1 14-14M22 80a14 14 0 1 1 14 14 14 14 0 0 1-14-14m173.2 112.33a2 2 0 0 1-2 1.67H62.78a2 2 0 0 1-2-1.67L46.08 104l1.22-.55 36 44.36A6 6 0 0 0 88 150a5.5 5.5 0 0 0 .81-.06 6 6 0 0 0 4.69-3.55l29.92-68.8a25.8 25.8 0 0 0 9.16 0l29.92 68.8a6 6 0 0 0 4.69 3.55 5.5 5.5 0 0 0 .81.06 6 6 0 0 0 4.66-2.22l36-44.36 1.22.55ZM220 94a14 14 0 1 1 14-14 14 14 0 0 1-14 14" />
      </G>
    </Svg>
  );
};