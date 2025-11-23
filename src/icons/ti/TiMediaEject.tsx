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

export const TiMediaEject = (props: IconProps) => {
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
        <Path d="M17 16H7a2 2 0 0 0 0 4h10a2 2 0 0 0 0-4m1.433-5.396L12 4l-6.433 6.604A2 2 0 0 0 7 14h10a2 2 0 0 0 1.433-3.396" />
      </G>
    </Svg>
  );
};