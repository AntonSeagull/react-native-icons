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

export const PiMusicNotesMinusLight = (props: IconProps) => {
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
        <Path d="M230 48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-16 40v76a34.06 34.06 0 1 1-12-25.89V88a6 6 0 0 1 12 0m-12 76a22 22 0 1 0-22 22 22 22 0 0 0 22-22M86 108.69V196a34.06 34.06 0 1 1-12-25.89V56a6 6 0 0 1 4.54-5.82l56-14a6 6 0 1 1 2.92 11.64L86 60.68v35.63l72.54-18.13a6 6 0 1 1 2.92 11.64ZM74 196a22 22 0 1 0-22 22 22 22 0 0 0 22-22" />
      </G>
    </Svg>
  );
};