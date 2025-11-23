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

export const PiListChecksBold = (props: IconProps) => {
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
        <Path d="M228 128a12 12 0 0 1-12 12h-88a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12M128 76h88a12 12 0 0 0 0-24h-88a12 12 0 0 0 0 24m88 104h-88a12 12 0 0 0 0 24h88a12 12 0 0 0 0-24M79.51 39.51 56 63l-7.51-7.52a12 12 0 0 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm0 64L56 127l-7.51-7.52a12 12 0 1 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm0 64L56 191l-7.51-7.52a12 12 0 1 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Z" />
      </G>
    </Svg>
  );
};