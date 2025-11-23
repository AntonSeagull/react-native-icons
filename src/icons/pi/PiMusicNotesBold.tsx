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

export const PiMusicNotesBold = (props: IconProps) => {
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
        <Path d="M215.38 14.54a12 12 0 0 0-10.29-2.18l-128 32A12 12 0 0 0 68 56v103.35A40 40 0 1 0 92 196v-82.63l104-26v40A40 40 0 1 0 220 164V24a12 12 0 0 0-4.62-9.46M52 212a16 16 0 1 1 16-16 16 16 0 0 1-16 16M92 88.63V65.37l104-26v23.26ZM180 180a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  );
};