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

export const CiMaximize1 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3.065 16.16a.5.5 0 0 1 1 0v3.07l.01-.01 6.07-6.07a.5.5 0 0 1 .71.71c-.29.29-.58.57-.87.86-1.74 1.74-3.47 3.48-5.21 5.22h3.07a.5.5 0 0 1 0 1h-4.28a.43.43 0 0 1-.34-.14c-.01-.01-.02-.01-.02-.02a.38.38 0 0 1-.13-.26c-.009-.078-.01-4.36-.01-4.36M20.935 3.56v4.28a.5.5 0 0 1-1 0V4.77l-.01.01q-3.045 3.03-6.07 6.07a.5.5 0 0 1-.71-.71c.29-.29.58-.57.86-.86 1.75-1.74 3.48-3.48 5.22-5.22h-3.07a.5.5 0 0 1 0-1h4.28a.43.43 0 0 1 .34.14c.01.01.02.01.02.02a.43.43 0 0 1 .14.34" />
      </G>
    </Svg>
  );
};