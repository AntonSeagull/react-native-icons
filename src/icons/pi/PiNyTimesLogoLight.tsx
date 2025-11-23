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

export const PiNyTimesLogoLight = (props: IconProps) => {
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
        <Path d="M172 138a10 10 0 1 1-10 10 10 10 0 0 1 10-10m13.46-36.56-66.22-30.91A74 74 0 0 0 54 144v.66l71.16-37.95A6 6 0 0 1 134 112v105.76a73.63 73.63 0 0 0 64.61-51.56 6 6 0 0 1 11.45 3.6A86 86 0 1 1 54.57 99.23 34 34 0 0 1 68 34a6 6 0 0 1 2.54.56L189.26 90A22 22 0 0 0 188 46a6 6 0 0 1 0-12 34 34 0 0 1 0 68 6 6 0 0 1-2.54-.56M102 213.27a73.5 73.5 0 0 0 20 4.47V122l-20 10.67Zm-46.73-55.68A74.22 74.22 0 0 0 90 207.47v-68.4Zm46.14-95.38L66.74 46a22 22 0 0 0-4.93 43.05c.86-1 1.75-2.06 2.67-3.07a86 86 0 0 1 36.93-23.77" />
      </G>
    </Svg>
  );
};