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

export const PiFramerLogoLight = (props: IconProps) => {
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
        <Path d="M206 104V40a6 6 0 0 0-6-6H56a6 6 0 0 0-4 10.48L112.22 98H56a6 6 0 0 0-6 6v64a6 6 0 0 0 1.76 4.24l72 72A6 6 0 0 0 134 240v-66h66a6 6 0 0 0 4-10.48L143.78 110H200a6 6 0 0 0 6-6m-21.78 58H128a6 6 0 0 0-6 6v57.51l-60-60V110h63.72ZM194 98h-63.72l-58.5-52H194Z" />
      </G>
    </Svg>
  );
};