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

export const TbBuildingCarousel = (props: IconProps) => {
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
        <Path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
        <Path d="M3 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 22l4-10 4 10" />
      </G>
    </Svg>
  );
};