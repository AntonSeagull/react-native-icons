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

export const HiMiniSignalSlash = (props: IconProps) => {
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
        <Path d="M2.22 2.22a.75.75 0 0 1 1.06 0l6.783 6.782a1 1 0 0 1 .935.935l6.782 6.783a.75.75 0 1 1-1.06 1.06l-6.783-6.782a1 1 0 0 1-.935-.935L2.22 3.28a.75.75 0 0 1 0-1.06m1.416 14.144a9.004 9.004 0 0 1-1.39-10.936L3.349 6.53a7.5 7.5 0 0 0 1.348 8.773.75.75 0 0 1-1.061 1.061m2.828-2.828a5 5 0 0 1-1.213-5.103l1.262 1.262a3.5 3.5 0 0 0 1.012 2.78.75.75 0 0 1-1.06 1.06Zm9.9-9.9a9.004 9.004 0 0 1 1.39 10.937l-1.103-1.104a7.5 7.5 0 0 0-1.348-8.772.75.75 0 1 1 1.061-1.061m-2.828 2.828a5 5 0 0 1 1.213 5.103l-1.262-1.262a3.5 3.5 0 0 0-1.012-2.78.75.75 0 0 1 1.06-1.06Z" />
      </G>
    </Svg>
  );
};