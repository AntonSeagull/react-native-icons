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

export const PiFloppyDiskBold = (props: IconProps) => {
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
        <Path d="m222.14 69.17-35.31-35.31A19.86 19.86 0 0 0 172.69 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V83.31a19.86 19.86 0 0 0-5.86-14.14M164 204H92v-44h72Zm40 0h-16v-48a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v48H52V52h119l33 33ZM164 84a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h56a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};