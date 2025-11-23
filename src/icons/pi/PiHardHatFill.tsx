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

export const PiHardHatFill = (props: IconProps) => {
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
        <Path d="M152 152h-48V40a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm72 16H32a16 16 0 0 0-16 16v8a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-8a16 16 0 0 0-16-16m0-20v-12a96.44 96.44 0 0 0-50.11-84.31 4 4 0 0 0-5.89 3.53V152h52a4 4 0 0 0 4-4m-188 4h52V55.22a4 4 0 0 0-5.89-3.53A96.44 96.44 0 0 0 32 136v12a4 4 0 0 0 4 4" />
      </G>
    </Svg>
  );
};