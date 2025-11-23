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

export const PiBracketsAngleThin = (props: IconProps) => {
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
        <Path d="M83.37 42.15 28.74 128l54.63 85.85a4 4 0 0 1-1.22 5.52A4 4 0 0 1 80 220a4 4 0 0 1-3.37-1.85l-56-88a4 4 0 0 1 0-4.3l56-88a4 4 0 1 1 6.74 4.3m152 83.7-56-88a4 4 0 1 0-6.74 4.3L227.26 128l-54.63 85.85a4 4 0 0 0 1.22 5.52 4 4 0 0 0 2.15.63 4 4 0 0 0 3.37-1.85l56-88a4 4 0 0 0 0-4.3" />
      </G>
    </Svg>
  );
};