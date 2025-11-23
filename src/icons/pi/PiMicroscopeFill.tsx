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

export const PiMicroscopeFill = (props: IconProps) => {
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
        <Path d="M232 216a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h149.25A72 72 0 0 0 144 80.46V136a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v32.37A88.05 88.05 0 0 1 203.94 208H224a8 8 0 0 1 8 8m-96-32a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16Z" />
      </G>
    </Svg>
  );
};