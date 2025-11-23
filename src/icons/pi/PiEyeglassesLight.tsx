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

export const PiEyeglassesLight = (props: IconProps) => {
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
        <Path d="M200 42a6 6 0 0 0 0 12 18 18 0 0 1 18 18v62.65A42 42 0 0 0 147.21 154h-38.42A42 42 0 0 0 38 134.65V72a18 18 0 0 1 18-18 6 6 0 0 0 0-12 30 30 0 0 0-30 30v92a42 42 0 0 0 84 2h36.1a42 42 0 0 0 83.9-2V72a30 30 0 0 0-30-30M68 194a30 30 0 1 1 30-30 30 30 0 0 1-30 30m120 0a30 30 0 1 1 30-30 30 30 0 0 1-30 30" />
      </G>
    </Svg>
  );
};