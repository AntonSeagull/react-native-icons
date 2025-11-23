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

export const TbChartDots = (props: IconProps) => {
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
        <Path d="M3 3v18h18" />
        <Path d="M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10.16 10.62l2.34 2.88M15.088 13.328l2.837-4.586" />
      </G>
    </Svg>
  );
};