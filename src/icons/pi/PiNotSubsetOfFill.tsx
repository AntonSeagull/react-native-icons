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

export const PiNotSubsetOfFill = (props: IconProps) => {
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
        <Path d="M128 80h31.37l-68.54 78.33A48 48 0 0 1 128 80m96-32v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-34.73 10a8 8 0 0 0-11.29.75L173.37 64H128a64 64 0 0 0-47.81 106.49L66 186.73a8 8 0 0 0 12 10.54L92.22 181A63.6 63.6 0 0 0 128 192h48a8 8 0 0 0 0-16h-48a47.63 47.63 0 0 1-25.13-7.13L190 69.27a8 8 0 0 0-.73-11.27" />
      </G>
    </Svg>
  );
};