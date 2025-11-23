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

export const VscArrowCircleDown = (props: IconProps) => {
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
        <Path d="m5.369 8.08 2.14 2.14V4.468h1v5.68l2.066-2.067.707.707-2.957 2.956h-.707L4.662 8.788z" />
        <Path d="M14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0m-1 0A5 5 0 1 1 3 8a5 5 0 0 1 10 0" />
      </G>
    </Svg>
  );
};