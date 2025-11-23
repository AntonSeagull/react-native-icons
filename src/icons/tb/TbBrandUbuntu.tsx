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

export const TbBrandUbuntu = (props: IconProps) => {
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
        <Path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M17.723 7.41a8 8 0 0 0-3.74-2.162m-3.971 0a8 8 0 0 0-3.789 2.216m-1.881 3.215A8 8 0 0 0 4 12.999c0 .738.1 1.453.287 2.132m1.96 3.428a8 8 0 0 0 3.759 2.19m4 0a8 8 0 0 0 3.747-2.186m1.962-3.43a8 8 0 0 0 .287-2.131c0-.764-.107-1.503-.307-2.203" />
        <Path d="M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      </G>
    </Svg>
  );
};