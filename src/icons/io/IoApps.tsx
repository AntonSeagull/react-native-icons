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

export const IoApps = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M104 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M256 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M408 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M104 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M256 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M408 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M104 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M256 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56M408 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56" />
      </G>
    </Svg>
  );
};