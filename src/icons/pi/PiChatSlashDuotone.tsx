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

export const PiChatSlashDuotone = (props: IconProps) => {
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
        <Path d="M224 64v128a8 8 0 0 1-8 8H80l-34.85 30.11A8 8 0 0 1 32 224V64a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L44.46 48H40a16 16 0 0 0-16 16v160a15.85 15.85 0 0 0 9.24 14.5A16.1 16.1 0 0 0 40 240a15.94 15.94 0 0 0 10.26-3.78l.08-.07L83 208h106.92l12.16 13.38a8 8 0 1 0 11.84-10.76ZM80 192a8 8 0 0 0-5.23 1.95L40 224V64h19l116.37 128ZM232 64v122a8 8 0 0 1-16 0V64H105.79a8 8 0 0 1 0-16H216a16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};