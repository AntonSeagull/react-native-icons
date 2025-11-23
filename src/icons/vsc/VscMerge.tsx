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

export const VscMerge = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M10.5 4.646 8.354 2.5h-.707L5.5 4.646l.707.707L7.3 4.261V5.28h-.02v.456l.025.001.006.319q.005.281.05.574t.117.586.2.627q.232.568.565 1.031t.715.867.76.797q.376.393.681.838t.494.973q.188.526.188 1.213v.884H12.5v-.884a6 6 0 0 0-.166-1.39 4.6 4.6 0 0 0-.427-1.1 6 6 0 0 0-.604-.897q-.333-.404-.693-.774-.36-.369-.693-.738a6.4 6.4 0 0 1-.604-.785 3.8 3.8 0 0 1-.433-.914 3.7 3.7 0 0 1-.16-1.13V5.28h-.001v-1l1.074 1.074zM7.042 9.741a8 8 0 0 0 .329-.369 6 6 0 0 1-.62-1.15L6.744 8.2a7 7 0 0 1-.095-.263q-.255.384-.565.726-.333.369-.693.738-.36.37-.693.774t-.604.896a4.6 4.6 0 0 0-.427 1.102 6 6 0 0 0-.166 1.389v.884h1.42v-.884q0-.686.188-1.213.188-.528.493-.973.304-.445.682-.838.376-.393.76-.797z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};