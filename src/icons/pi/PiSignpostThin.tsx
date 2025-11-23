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

export const PiSignpostThin = (props: IconProps) => {
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
        <Path d="M243 109.32 209.36 72a12.06 12.06 0 0 0-8.92-4H132V32a4 4 0 0 0-8 0v36H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h84v68a4 4 0 0 0 8 0v-68h68.44a12.06 12.06 0 0 0 8.92-4L243 114.68a4 4 0 0 0 0-5.36m-39.56 37.36a4 4 0 0 1-3 1.32H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h160.44a4 4 0 0 1 3 1.32L234.62 112Z" />
      </G>
    </Svg>
  );
};