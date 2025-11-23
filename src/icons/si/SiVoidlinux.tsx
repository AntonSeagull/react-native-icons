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

export const SiVoidlinux = (props: IconProps) => {
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
        <Path d="M15.818 12a3.82 3.82 0 0 1-3.82 3.82A3.82 3.82 0 0 1 8.178 12a3.82 3.82 0 0 1 3.82-3.82 3.82 3.82 0 0 1 3.82 3.82m3.179 9.73-2.726-2.725A8.2 8.2 0 0 1 12 20.212 8.21 8.21 0 0 1 3.788 12a8.2 8.2 0 0 1 1.209-4.269l-2.73-2.73A12 12 0 0 0 0 12c0 6.627 5.373 12 12 12a12 12 0 0 0 6.997-2.27M12 0a12 12 0 0 0-6.997 2.27L7.73 4.994A8.2 8.2 0 0 1 12 3.788 8.21 8.21 0 0 1 20.212 12a8.2 8.2 0 0 1-1.209 4.269l2.73 2.73A12 12 0 0 0 24 12c0-6.627-5.373-12-12-12" />
      </G>
    </Svg>
  );
};