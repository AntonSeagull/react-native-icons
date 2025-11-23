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

export const PiMusicNotesMinusFill = (props: IconProps) => {
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
        <Path d="M224 40h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16M162.13 76.5a31.57 31.57 0 0 1-16.44-38.76 4 4 0 0 0-4.69-5.21L78.06 48.25A8 8 0 0 0 72 56v110.1A36 36 0 1 0 52.42 232C72.25 231.77 88 215.13 88 195.3v-93.05l73.26-18.31a4 4 0 0 0 .87-7.44M212 80h-8a4 4 0 0 0-4 4v50.1a36 36 0 1 0-19.58 65.9c19.83-.23 35.58-16.86 35.58-36.7V84a4 4 0 0 0-4-4" />
      </G>
    </Svg>
  );
};