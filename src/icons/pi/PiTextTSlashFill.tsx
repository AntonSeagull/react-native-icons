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

export const PiTextTSlashFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 40h48a8 8 0 0 1 8 8v16a8 8 0 0 1-16 0v-8h-40a8 8 0 0 1 0-16m61.27 126a8 8 0 0 1-11.29-.75l-42-48V176h12a8 8 0 0 1 0 16H108a8 8 0 0 1 0-16h12v-45L88 94.43V96a8 8 0 0 1-16 0V80a8.1 8.1 0 0 1 .63-3.13L66 69.27a8 8 0 0 1 12-10.54l112 128a8 8 0 0 1-.73 11.27" />
      </G>
    </Svg>
  );
};