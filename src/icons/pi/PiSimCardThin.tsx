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

export const PiSimCardThin = (props: IconProps) => {
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
        <Path d="m210.83 85.17-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h94.35L204 89.66ZM76 120v72a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4m8 4h88v64h-24v-36a4 4 0 0 0-8 0v36h-24v-36a4 4 0 0 0-8 0v36H84Z" />
      </G>
    </Svg>
  );
};