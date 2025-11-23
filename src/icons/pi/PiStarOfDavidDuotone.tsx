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

export const PiStarOfDavidDuotone = (props: IconProps) => {
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
        <Path d="m192 128 32 56h-64l-32 56-32-56H32l32-56-32-56h64l32-56 32 56h64Z" opacity={0.2} />
        <Path d="M201.21 128 231 76a8 8 0 0 0-7-12h-59.35L135 12a8 8 0 0 0-13.9 0L91.33 64H32a8 8 0 0 0-6.95 12l29.72 52-29.72 52a8 8 0 0 0 7 12h59.28l29.72 52a8 8 0 0 0 13.9 0l29.7-52H224a8 8 0 0 0 7-12Zm9-48L192 111.88 173.79 80Zm-27.42 48-27.42 48h-54.75L73.2 128l27.42-48h54.75ZM128 32.12 146.22 64h-36.45ZM45.78 80h36.41L64 111.88Zm0 95.92L64 144.12 82.19 176ZM128 223.88 109.77 192h36.45ZM173.79 176 192 144.12 210.21 176Z" />
      </G>
    </Svg>
  );
};