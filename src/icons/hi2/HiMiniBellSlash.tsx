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

export const HiMiniBellSlash = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4 8q0-.39.049-.77l7.722 7.723a34 34 0 0 1-3.722-.01 2 2 0 0 0 3.862.15l1.134 1.134a3.5 3.5 0 0 1-6.53-1.409 33 33 0 0 1-3.257-.508.75.75 0 0 1-.515-1.076A11.45 11.45 0 0 0 4 8m13.266 5.9a1 1 0 0 1-.068.116L6.389 3.207A6 6 0 0 1 16 8a11.5 11.5 0 0 0 1.258 5.234.75.75 0 0 1 .01.666ZM3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06z" />
      </G>
    </Svg>
  );
};