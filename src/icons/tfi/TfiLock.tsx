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

export const TfiLock = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.5 10.972a.99.99 0 0 1-.5.846v2.154H8v-2.153a.98.98 0 0 1-.5-.847 1 1 0 1 1 2 0m5.465-2.512v7.08c0 .827-.673 1.5-1.5 1.5H3.476c-.827 0-1.5-.673-1.5-1.5V8.46c0-.827.673-1.5 1.5-1.5H3.5V4.972c0-2.757 2.243-5 5-5s5 2.243 5 5v1.992a1.5 1.5 0 0 1 1.465 1.496M4.5 6.96h8V4.972c0-2.206-1.794-4-4-4s-4 1.794-4 4zm9.465 1.5a.497.497 0 0 0-.465-.493v.004h-10V7.96h-.024a.5.5 0 0 0-.5.5v7.08a.5.5 0 0 0 .5.5h9.989a.5.5 0 0 0 .5-.5z" />
      </G>
    </Svg>
  );
};