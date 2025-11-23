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

export const LiaFillSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.313 3.281 9.906 4.72 11.687 6.5l-6.906 6.906a3.063 3.063 0 0 0 0 4.313l.063.062 6.344 6.313a3.063 3.063 0 0 0 4.312 0l7.594-7.594.718-.687-9.718-9.72-.781-.812-.22-.187Zm1.812 4.656L21 15.814l-6.906 6.874a1.054 1.054 0 0 1-1.5 0l-6.375-6.406a1.017 1.017 0 0 1 0-1.468ZM25 19.25l-.812 1.188s-.54.753-1.063 1.656c-.262.453-.508.926-.719 1.406S22 24.422 22 25c0 1.645 1.355 3 3 3s3-1.355 3-3c0-.578-.195-1.02-.406-1.5s-.457-.953-.719-1.406c-.523-.903-1.062-1.657-1.062-1.657Zm0 3.625c.066.11.059.102.125.219.238.41.492.847.656 1.218.164.372.219.715.219.688 0 .555-.445 1-1 1s-1-.445-1-1c0 .027.055-.316.219-.687s.418-.81.656-1.22c.066-.116.059-.109.125-.218" />
      </G>
    </Svg>
  );
};