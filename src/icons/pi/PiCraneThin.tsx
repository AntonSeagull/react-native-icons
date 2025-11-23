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

export const PiCraneThin = (props: IconProps) => {
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
        <Path d="M226.06 20.57a4 4 0 0 0-3.94-.1L103 84H32a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-32a4 4 0 0 0-.17-1.15L108.77 90 220 30.67V160a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V24a4 4 0 0 0-1.94-3.43M101 92l21.6 72H60V92Zm-69 0h20v72H28V96a4 4 0 0 1 4-4m88 112H32a4 4 0 0 1-4-4v-28h96v28a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};