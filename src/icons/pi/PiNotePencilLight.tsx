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

export const PiNotePencilLight = (props: IconProps) => {
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
        <Path d="m228.24 59.76-32-32a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 90 128v32a6 6 0 0 0 6 6h32a6 6 0 0 0 4.24-1.76l96-96a6 6 0 0 0 0-8.48M125.51 154H102v-23.51l66-66L191.51 88ZM200 79.51 176.49 56 192 40.49 215.51 64ZM222 128v80a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h80a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-80a6 6 0 0 1 12 0" />
      </G>
    </Svg>
  );
};