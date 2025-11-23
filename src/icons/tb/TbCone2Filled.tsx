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

export const TbCone2Filled = (props: IconProps) => {
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
        <Path d="M12 1c5.52 0 10 1.494 10 4.002v.5a1 1 0 0 1-.121.477L13.74 20.985a2 2 0 0 1-3.489-.016l-8.13-14.99A1 1 0 0 1 2 5.504v-.5C2 2.495 6.48 1 12 1" />
      </G>
    </Svg>
  );
};