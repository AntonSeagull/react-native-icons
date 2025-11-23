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

export const HiMiniAdjustmentsHorizontal = (props: IconProps) => {
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
        <Path d="M10 3.75a2 2 0 1 0-4 0 2 2 0 0 0 4 0m7.25.75a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5zM5 3.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75M4.25 17a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zm13 0a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5zM9 10a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h5.5A.75.75 0 0 1 9 10m8.25.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zM14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-4 6.25a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
      </G>
    </Svg>
  );
};