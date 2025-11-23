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

export const PiMailbox = (props: IconProps) => {
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
        <Path d="M104 152a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m136-36v60a16 16 0 0 1-16 16h-88v32a8 8 0 0 1-16 0v-32H32a16 16 0 0 1-16-16v-60a60.07 60.07 0 0 1 60-60h76V24a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-24v24h12a60.07 60.07 0 0 1 60 60m-120 60v-60a44 44 0 0 0-88 0v60Zm104-60a44.05 44.05 0 0 0-44-44h-12v72a8 8 0 0 1-16 0V72h-35.25A59.86 59.86 0 0 1 136 116v60h88Z" />
      </G>
    </Svg>
  );
};