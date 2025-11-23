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

export const PiSelectionInverseFill = (props: IconProps) => {
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
        <Path d="M152 216a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8M40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16M224 48a16 16 0 0 0-16-16H48a15.87 15.87 0 0 0-10.66 4.11 7.7 7.7 0 0 0-1.23 1.23A15.87 15.87 0 0 0 32 48v24a8 8 0 0 0 16 0V59.31L196.69 208H184a8 8 0 0 0 0 16h24a15.9 15.9 0 0 0 10.66-4.1 7 7 0 0 0 .65-.59 6 6 0 0 0 .58-.65A15.87 15.87 0 0 0 224 208Z" />
      </G>
    </Svg>
  );
};