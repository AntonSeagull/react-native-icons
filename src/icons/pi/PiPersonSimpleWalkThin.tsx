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

export const PiPersonSimpleWalkThin = (props: IconProps) => {
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
        <Path d="M152 76a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20m60 116a4 4 0 0 1-4 4c-33.65 0-49.92-16.43-64.28-30.93-3.52-3.57-6.86-6.93-10.34-10-.66-.57-1.34-1.09-2-1.59l-16.86 38.77 39.84 28.45A4 4 0 0 1 156 176v56a4 4 0 0 1-8 0v-53.94l-36.77-26.26-35.56 81.79a4 4 0 1 1-7.34-3.19l55.93-128.62c-29.7-10.55-73 29.64-73.52 30.09a4 4 0 1 1-5.48-5.87 173.4 173.4 0 0 1 32.84-23.41c25.15-13.54 46.07-14.06 60.52-1.52 3.71 3.23 7.15 6.7 10.79 10.37 13.9 14 28.28 28.56 58.59 28.56a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};