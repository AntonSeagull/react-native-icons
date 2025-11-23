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

export const PiPlaceholderDuotone = (props: IconProps) => {
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
        <Path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity={0.2} />
        <Path d="M224 48a16 16 0 0 0-16-16H48a15.9 15.9 0 0 0-10.66 4.1 9 9 0 0 0-1.24 1.24A15.9 15.9 0 0 0 32 48v160a16 16 0 0 0 16 16h160a15.9 15.9 0 0 0 10.66-4.1 7 7 0 0 0 .65-.59 6 6 0 0 0 .58-.65A15.87 15.87 0 0 0 224 208Zm-16 148.7L59.31 48H208ZM48 59.31 196.69 208H48Z" />
      </G>
    </Svg>
  );
};