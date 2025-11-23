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

export const PiVideoCameraFill = (props: IconProps) => {
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
        <Path d="M192 72v112a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m58 .25a8.23 8.23 0 0 0-6.63 1.22l-33.59 22.39a4 4 0 0 0-1.78 3.33v57.62a4 4 0 0 0 1.78 3.33l33.78 22.52a8 8 0 0 0 8.58.19 8.33 8.33 0 0 0 3.86-7.17V80a8 8 0 0 0-6-7.75" />
      </G>
    </Svg>
  );
};