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

export const PiPipeFill = (props: IconProps) => {
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
        <Path d="M232 104h-24V56h24a8 8 0 0 0 0-16h-26.17A16 16 0 0 0 192 32h-16a16 16 0 0 0-13.83 8H144A104.11 104.11 0 0 0 40 144v18.16A16 16 0 0 0 32 176v16a16 16 0 0 0 8 13.84V232a8 8 0 0 0 16 0v-24h48v24a8 8 0 0 0 16 0v-26.16a16 16 0 0 0 8-13.84v-16a16 16 0 0 0-8-13.84V144a24 24 0 0 1 24-24h18.17a16 16 0 0 0 13.83 8h16a16 16 0 0 0 13.83-8H232a8 8 0 0 0 0-16m-120 88H48v-16h64Zm64-80V48h16v64Z" />
      </G>
    </Svg>
  );
};