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

export const PiMusicNotesPlusBold = (props: IconProps) => {
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
        <Path d="M236 48a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0V60h-12a12 12 0 0 1 0-24h12V24a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m-16 64v52a40 40 0 1 1-24-36.65V112a12 12 0 0 1 24 0m-24 52a16 16 0 1 0-16 16 16 16 0 0 0 16-16M92 113.37V196a40 40 0 1 1-24-36.65V56a12 12 0 0 1 9.09-11.64l56-14a12 12 0 0 1 5.82 23.28L92 65.37v23.26l65.09-16.27a12 12 0 0 1 5.82 23.28ZM68 196a16 16 0 1 0-16 16 16 16 0 0 0 16-16" />
      </G>
    </Svg>
  );
};